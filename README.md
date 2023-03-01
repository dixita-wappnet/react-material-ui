# Material-Ui

- Use for make beautiful design with React.js.
- Website UI look like mobile app
- Material Design also used with other framework also such as Angular and Vue js.
- But for other framework we have other library,
   - [Material Ui for React js](https://material-ui.com/)
   - [Material Ui for Angular](https://material.angular.io)
   - [Material Ui for Vue js](https://Vuematerial.io)
   
## Material Ui History (in React js)

- Current Version of MUI is v4.11.0
- Initial release of MUI in 2014
- MUI is developed by mui-org
- Make Beautiful Design for react

## Material UI - Template Image 

![image](https://user-images.githubusercontent.com/123729120/222144671-a3cc642b-d1a6-43ef-b85c-9bc79d4d612d.png)


## Installation - Material UI 

- ` npm install @mui/material @emotion/react @emotion/styled `. This command for npm.
- ` yarn add @mui/material @emotion/react @emotion/styled `. This command for yarn.

## Material UI - Button 

![image](https://cdn.dribbble.com/users/372375/screenshots/4374183/attachments/995184/preview1920.png)

## Material UI - Button Syntax 

- Basic Button :- 

    ![image](https://user-images.githubusercontent.com/123729120/222147421-587267f4-22f4-4682-a487-334d6ca4e115.png) `<Button variant="text">Text</Button>` 

    ![image](https://user-images.githubusercontent.com/123729120/222147996-70ba93ec-0c1f-4d2b-8c73-7bff192f8e04.png) `<Button variant="contained">Contained</Button>`
      
    ![image](https://user-images.githubusercontent.com/123729120/222148190-dfbb70cc-bcba-4b62-a52b-ef12d734318b.png) `<Button variant="outlined">Outlined</Button>`
  
- Text Button
        
    ![image](https://user-images.githubusercontent.com/123729120/222148661-b0f903cf-ecf3-4991-a8b7-9ebdb0f9cee4.png)`<Button>Primary</Button>`
     
    ![image](https://user-images.githubusercontent.com/123729120/222148839-a12d2857-19ed-4556-9809-aac0d774ecf3.png)`<Button disabled>Disabled</Button>`
       
    ![image](https://user-images.githubusercontent.com/123729120/222148980-b185524c-3d6f-4ca9-92b5-e851eddb2a3a.png)`<Button href="#text-buttons">Link</Button>`

- Contained button 
 
    ![image](https://user-images.githubusercontent.com/123729120/222150973-d00c2a5b-c2d4-4dec-871e-5ac1baeeae80.png) `<Button variant="contained">Contained</Button>`
    
    ![image](https://user-images.githubusercontent.com/123729120/222151199-9915362d-8cff-44d1-adbf-d4abb3ec8914.png) `<Button variant="contained" disabled>
                                                                                                                                         Disabled </Button>`
    
    ![image](https://user-images.githubusercontent.com/123729120/222151806-78174f3d-2f30-4c73-a6aa-8fb907eb3458.png) `<Button variant="contained" href="#contained-buttons">
  Link
</Button> `

- Button Color 

 ![image](https://user-images.githubusercontent.com/123729120/222152497-f7a6d795-863e-48a8-9dd6-06a183fef857.png)

 ```
        <Button variant="contained" color="primary">MUI Button</Button>
        <Button variant="contained" color="error">MUI Button</Button>
        <Button variant="contained" color="secondary">MUI Button</Button>
        <Button variant="contained" color="success">MUI Button</Button><br />
```

- Button Size 

![image](https://user-images.githubusercontent.com/123729120/222153229-e98d7a7d-f6e5-4ad1-873e-dcc23f997411.png)

```
       <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
```

- Upload Button 

![image](https://user-images.githubusercontent.com/123729120/222153684-30b1a880-a835-44bc-949c-264e502eb202.png)

`<Button variant="contained" component="label">
  Upload
  <input hidden accept="image/*" multiple type="file" />
</Button>`

- Button Icon 

![image](https://user-images.githubusercontent.com/123729120/222153991-eb4cf73d-efb5-4caa-bc32-8874994a5a72.png)

```
<IconButton color="primary" aria-label="upload picture" component="label">
  <input hidden accept="image/*" type="file" />
  <PhotoCamera />
</IconButton>
```








