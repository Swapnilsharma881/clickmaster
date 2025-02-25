"use client";
import { motion, AnimatePresence } from "framer-motion";
const images =[
"https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=300 ",
   "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=300" , 
    "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=300",
"https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=300" ,
    "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=300"
]

export default function Carousel() {
 
  return (
        <section className = " px-5 sm:px-10 xl:px-20 overflow-hidden top-0 py-8 w-[100wh] xl:py-12 ">
            <motion.div 
                        className ="flex space-x-4 w-m  " 
                        initial = {{x : 0}}
                        animate = {{x : "100%"}}
                        transition = {{
                                ease : "linear",
                                duration : 10,
                                repeat : Infinity}}
            > 
               {images.concat(images).map((src, index ) => (
               <div className = "w-[60vw] h-[80vh] flex-shrink-0 " key = {index}>
                        <img src = {src} alt = {`slide ${index}`} className = "w-full h-full object-cover rounded-sm shadow-orange-md"/>
                    </div>)
                                        )}    
            </motion.div>     
       </section>
       
);
}

