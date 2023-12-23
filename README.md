# DYNAMIC FORM MAKER - TrueFoundry Frontend Assignment

## Deployed Link : https://truefoundryfrontend-assignment.netlify.app/

### Examples of JSON UI Schema:
JSON Schema 1 : https://drive.google.com/file/d/1RUU_ueF9BbQRLReuX88w8PWe2jsz3Z3C/view

JSON Schema 2 : https://drive.google.com/file/d/19_E6dSDUbiDR31wNSSvUARHxh1HeT6L4/view

## Problem Statement : 
You have to create a React application that will allow users to paste a UI schema on the left side and preview the rendered form on the right-hand side. The application will have a single screen which will be divided into two equal sections next to each other. On the left section will be a JSON editor to paste the UI-Schema. On the right section, a form will be automatically rendered based on the pasted UI-Schema.

## Tech Stack :
For Frontend : React.js, JavaScript, ChakraUI

## Project Description :
### Short Description :
The React application comprises two primary components: the JSON editor and the form preview. Users can utilize the JSON editor component on the left side to input the UI schema in JSON format. On the right side, the form preview component dynamically renders and displays the form based on the provided UI schema.
### Long Description :
The objective of this project is to develop a React application utilizing Chakra UI, enabling users to input a UI schema on the left side and view a dynamically generated form on the right side. The UI schema, presented as a JSON array, encompasses all the necessary details to construct dynamic forms. The application features a single screen divided into two equal sections: the left section hosts a JSON editor for users to input the UI schema, while the right section automatically renders a form based on the provided schema.

Within the UI schema, objects define the form's structure and functionalities, each possessing properties such as "sort" to determine section sequence, "label" for displaying section labels, "description" for holding section or field descriptions, "validate" for defining field validations like "required" and "immutable," "jsonKey" for unique field/section identification, "uiType" for specifying form element types (e.g., input, number, group, select, switch), "level" for determining field nesting, and "placeholder" for adding placeholder or hint text in form fields.

Various form elements can be included in the UI schema, such as text input fields for capturing user input (e.g., pizza name), group fields containing nested fields (e.g., pizza type and toppings), and radio fields for presenting user options (e.g., different pizza types).

The application incorporates advanced fields that can be toggled on and off. Initially hidden, these fields become visible when the user clicks the "Show advanced fields" toggle button. The visibility of these advanced fields is controlled by the "validate" property in the UI schema.

## Features (JSON Editor) :
- Capability to identify modifications in the pasted JSON and instantly update the form preview component.

- Verification of the UI schema to guarantee adherence to the necessary structure and properties.

## Features (Form Preview) :
- Automatically generate the form by parsing the provided UI schema.

- Continuously adjust the form in response to modifications made within the UI schema using the JSON editor.

- Manage diverse field types, including text input, radio, switch, group, etc., and render them appropriately with their corresponding properties.
  
- Manage nested fields within groups, toggling their visibility based on user interactions with the form.
  
- Display tooltips containing field descriptions when users hover over specific form elements.
  
- Handle form submissions and present the entered data to the user, preparing it for backend transmission using the jsonKey values as keys and the corresponding entered values as values.

## Prerequisites :
- Node.js (v14.x.x or higher recommended)
  
- npm (v6.x.x or higher recommended)

## Installation :
1. Clone the Repository
```
https://github.com/samtaxak11/Frontend-Assignment.git
```
2. Install Dependencies
```
cd Frontend-Assignment
npm install
```
3. Start the Development Server
```
npm start
```
Executing this command will launch the application in development mode. To preview it in the browser, navigate to http://localhost:3000. Any edits made will trigger an automatic page reload.

## Production Building :
For generating a production build, execute:
```
npm run build
```
Executing this command will compile the application for production, producing output files in the build folder. The build is compressed, and the filenames include hashes to facilitate efficient caching.

## Application's Screenshots :
![Screenshot (817)](https://github.com/samtaxak11/Frontend-Assignment/assets/97292068/1200caf7-af20-4453-bd52-277345f645df)
![Screenshot (818)](https://github.com/samtaxak11/Frontend-Assignment/assets/97292068/1166ee9f-526d-497d-8777-85f7a86154b8)
![Screenshot (819)](https://github.com/samtaxak11/Frontend-Assignment/assets/97292068/2ce14461-fe0b-4d6d-80ba-e2960a772b56)
![Screenshot (820)](https://github.com/samtaxak11/Frontend-Assignment/assets/97292068/a2e75f37-4239-412f-8234-f4494f7ac66c)
![Screenshot (821)](https://github.com/samtaxak11/Frontend-Assignment/assets/97292068/3e238ac6-9e54-43cd-a55a-da97ae98d428)

## Personal Links :
### Portfolio : https://sourabhtakshak.netlify.app/
### LinkedIn Profile : www.linkedin.com/in/sourabh-takshak
