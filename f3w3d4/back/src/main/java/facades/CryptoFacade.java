package facades;

import entities.Crypto;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class CryptoFacade {

    private ExecutorService executor = Executors.newFixedThreadPool(12);
    private String[] symbols = {"ADATUSD", "ATOMTUSD", "BATTUSD", "BNBTUSD", "BTCTUSD", "EOSTUSD", "ETCTUSD", "ETHTUSD", "LTCTUSD", "NEOTUSD", "TRXTUSD", "XRPTUSD"};
    private static CryptoFacade instance;

    public static CryptoFacade getCryptoFacade() {
        if (instance == null) {
            instance = new CryptoFacade();
        }
        return instance;
    }

    public List<Crypto> getCryptos() throws InterruptedException, ExecutionException {
        List<Crypto> cryptos = new ArrayList();
        List<Future> futureList = new ArrayList();
        for (String symbol : symbols) {
            Future<Crypto> future = executor.submit(() -> {
                return new Crypto(symbol,getPrice(symbol));
            });
            futureList.add(future);
        }
        for(Future f : futureList) {
            cryptos.add((Crypto)f.get());
        }
        
        return cryptos;
    }

    private Double getPrice(String symbol) throws MalformedURLException, ProtocolException, IOException {
        URL url = new URL("https://api.binance.com/api/v3/avgPrice?symbol=" + symbol);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("Accept", "application/json;charset=UTF-8");
        String price = "";
        try (Scanner scan = new Scanner(con.getInputStream())) {
            while (scan.hasNext()) {
                price += scan.nextLine().split(":")[2].replaceAll("\"", "").replace("}", "");
            }
        }
        return Double.valueOf(price);
    }
}
