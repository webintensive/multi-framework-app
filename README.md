#IFrame Host/Client (IFHC 1.0.1)#

##Introduction##
This is a research app to allow different Single Page Applications (SPA) be able to reside in harmony on a single browser window.

###Implementation###
The purposed implementation is to create a mock "host/client" network.  

Each client SPA will be loaded into the host browser window as an IFrame - a special JS library is used to to bridge the communication of the SPA client(s) and the host window.

For DEMO purposes, we have currently have three different IFrame clients based on:
    
1. [Angular 1.2](https://www.angularjs.org/)
2. [Angular 1.3](https://www.angularjs.org/)
3. [JQuery 2.1.1](http://www.jquery.com/)

##How to Use##
1. In the terminal/command line via npm (download from https://www.npmjs.org/, if you do not have it installed on your computer): `npm install`
2. After that is done, enter: `gulp dev`
3. A server should be initiated, via a browser visit `http://localhost:3000/`
4. Click `+` to add more widgets, when choosing widget ID be sure to use a unique name
4. Text and file messages can be sent to different clients via the recipient list (.JSON / .txt / .html / .jpg/gif/most image files are supported)

##To-Do's##
There are plenty :-(

**Top item: write unit tests - may be convert the 'api' and 'core' libraries to use AMD module definitions (Common/RequiredJS) for easier unit-testing**

##Library Structure##
    
	 [IFHC]
	 * Root folder of IFHC andlibrary
	 |    
	 |-- [dist]
	 |    * Distribution Folder
	 |    |
	 |    |-- IFHC.min.js
	 |        * Compiled and minified IFHC library file
	 |    
	 |-- [src]
	 |    * Source Folder
	 |
	 |-- [core]
	 |    * The basic objects/libraries that the "api" is dependent on
	 |    |
	 |    |-- [attachment-library]
	 |    |    * Contains all components related to this library
	 |    |    |    
	 |    |    |-- (attachment-constant.js)
	 |    |    |    * Data package type definitions
	 |    |    |    
	 |    |    |-- (attachment-library.js)
	 |    |         * Through a transmission protocol, a client can communicate with the host
	 |    |         * Direct communication between clients is prohibited; to establish this form of communication, a client must communicate with the host first, and the host will forward the message to the recipient client
	 |    |         * To keep the transmission protocol organized, an optional attachment field is used to store any "messages" that is to be consumed by the recipient
	 |    |         * Attachment types include - text based messages, list/collections (array type object), and files
	 |    |
	 |    |-- [client-library]
	 |    |    * Contains all components related to this library
	 |    |    |
	 |    |    |-- (client-library.js)
	 |    |         * Base "Client" functionality library
	 |    |         * Functionality for IFrame client to "postMessage" to parent / browser window
	 |    |
	 |    |-- [hash-library]
	 |    |    * Contains all components related to this library
	 |    |    |
	 |    |    |-- (hash-library.js)
	 |    |         * HASH bucket library
	 |    |
	 |    |-- [server-library]
	 |    |    * Contains all components related to this library
	 |    |    |
	 |    |    |-- (server-constant.js)
	 |    |    |    * Server constant definitions
	 |    |    |
	 |    |    |-- (server-library.js)
	 |    |         * Base "Server" functionality library: connecting/disconnecting a client etc.
	 |    |         * Keeps track of all connected clients
	 |    |         * Functionality to "postMessage" to any IFrame client
	 |    |
	 |    |-- [transmission-library]
	 |    |    * Contains all components related to this library
	 |    |    |
	 |    |    |-- (transmission-library.js)
	 |    |         * Base "Transmission" object library
	 |    |         * Creates the "Transmission" object
	 |    |         * A communication protocol between host and client
	 |    |
	 |    |-- [utility-library]
	 |         * Contains all components related to this library
	 |         |
	 |         |-- (utility-library.js)
	 |              * Miscellaneous helper functions
	 |
	 |-- [api]
	 |    * API Libraries
	 |    |
	 |    |-- (api-attachment-library.js)
	 |    |    * A "Transmission" encapsulates a data package, "Attachment;" this is a processing library for this data
	 |    |    * Extension of ./core/attachment-library
	 |    |
	 |    |-- (api-client-library.js)
	 |    |    * The "IFHC Client" library (requires a deferred library Angular/JQuery wrapper)
	 |    |    * Extension of ./core/client-library
	 |    |    * "IFHC Clients" communicates with the "IFHC Host" and other "IFHC Clients" through "Transmissions."
	 |    |    * "IFHC Client-to-Client" communication is couriered via "IFHC Host"
	 |    |
	 |    |-- (api-host-library.js)
	 |    |    * The "IFHC Host" library (allows for an optional router extension)
	 |    |    * Extension of ./core/server-library
	 |    |    * The host is single point of contact for all "Transmissions" sent by client(s)
	 |    |    
	 |    |-- (api-route-constant.js)
	 |    |    * URI/Route definitions
	 |    |
	 |    |-- (api-router-library.js)
	 |         * This is a processing library that handles all "Transmissions" sent to the "IFHC Host"
	 |         
	 |-- (api-template-footer.js)
	 |    * Generated "IFHC" library footer template
	 |
	 |-- (api-template-header.js)
	      * Generated "IFHC" library header template