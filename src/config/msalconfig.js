import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  // * Localhost URL for CCR app *

  // auth: {
  //   clientId: "d3046566-fd05-4d73-a7d4-4c63b7105745",
  //   authority: "https://login.microsoftonline.com/common", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
  //   redirectUri: "http://localhost:3000/",
  //   // redirectUri: "http://rise-qube-cc.s3-website-us-east-1.amazonaws.com/", // server url
  //   // redirectUri: "https://formbuilder.gti-data.com/",
  // },
  
  // * Dev URL for CCR app *

  auth: {
    clientId: "18dcfccf-a3b1-48a0-8990-6d7fb7563c38",
    authority: "https://login.microsoftonline.com/080c6c8e-bced-4e09-b5c3-6e55cbd80da4", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "https://dev.bi.gti-data.com/",
    // redirectUri: "https://formbuilder.gti-data.com/",
  },

  // // * Production URL *

  // auth: {
  //   clientId: "3555f07b-863e-40a6-85a6-494d780cda20",
  //   authority: "https://login.microsoftonline.com/080c6c8e-bced-4e09-b5c3-6e55cbd80da4", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
  //   redirectUri: "https://bi.gti-data.com/",
  //   // redirectUri: "https://formbuilder.gti-data.com/",
  //  },


  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },

  system: {	 
    loggerOptions: {	
        loggerCallback: (level, message, containsPii) => {	
            if (containsPii) {		
                return;		
            }		
            switch (level) {		
                case level.Error:		
                    console.error(message);		
                    return;		
                case level.Info:		
                    console.info(message);		
                    return;		
                case level.Verbose:		
                    console.debug(message);		
                    return;		
                case level.Warning:		
                    console.warn(message);		
                    return;	
                    default:
                      return level	
              }	
             

          }	
      }	
  }
};

export const loginRequest = {
  scopes: ["User.Read"]
};



export const msalInstance = new PublicClientApplication(msalConfig);
export const logoutRequest = {
    authority: msalConfig.authority,
    postLogoutRedirectUri: msalConfig.redirectUri,
    onRedirectNavigate: (url) => {
        return true;
    }
};

export const graphConfig = {
  graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
};


