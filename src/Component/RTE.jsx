import React from 'react'
import {Editor } from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'
import Conf from '../Config/config'
//The Controller component in React Hook Form is a wrapper that you can use to integrate
// controlled components from third-party libraries like React-Select, AntD, and MUI with React Hook Form. 
//It simplifies the process of managing the state and validation of these controlled inputs.
export default function RTE({name ,control,label,defaultValue=""}) {
     
    return (
        <div className='w-full'> 
           {label && <label className='inline-block mb-1 pl-1  text-lg'>{label}</label>}
        <Controller
        name = {name || "content"}
        control={control}
        render={({field : {onChange}})=>(
         <Editor
         initialValue={defaultValue}
         apiKey= "a06jf7gvzymz0nte2f5hdow2phazue920rnl95jzb062pj4o"
         init={{
             initialValue : defaultValue,
             height:500,
             menubar:true,
             plugins:[
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
             ],
             toolbar:"undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
             content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
         }}  
         onEditorChange={onChange}      
          />

        )}
        />
             
       
        </div>
        
            
    )
}


