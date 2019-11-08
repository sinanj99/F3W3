package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.Crypto;
import utils.EMF_Creator;
import facades.CryptoFacade;
import java.util.List;
import java.util.concurrent.ExecutionException;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("crypto")
public class CryptoResource {

    private static final CryptoFacade FACADE =  CryptoFacade.getCryptoFacade();
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
            
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public List<Crypto> crypto() throws InterruptedException, ExecutionException {
        return FACADE.getCryptos();
    }

 
}
