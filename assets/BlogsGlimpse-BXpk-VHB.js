import{u as l,j as e,r as a}from"./index-DHjt6gqb.js";const n=[{id:1,imageSrc:"/Web.jpg",title:"Web Development",subtitle:"Create User-Centric Web Pages for Growth",description:"Elevate your online presence with bespoke, user-centric websites that captivate, convert and rank yourself higher."},{id:2,imageSrc:"/Design.jpg",title:"Graphic Design",subtitle:"Craft Visually Stunning Graphic Designs",description:"Transform your brand identity with captivating visuals that leave a lasting impression and grab the attention with attraction."},{id:3,imageSrc:"/Marketing.png",title:"Digital Marketing",subtitle:"Master Digital Marketing Strategies for Success",description:"Cut through the clutter with targeted campaigns that reach the right audience at the right time."},{id:4,imageSrc:"/Branding.jpg",title:"Branding",subtitle:"Build a Cohesive and Lasting Brand Identity",description:"Craft a cohesive narrative that resonates with your audience, building a brand that stands the test of time."}],o=({selectedCategory:r})=>{l();const s=n.filter(t=>r==="All"?!0:r==="Code"?t.title==="Web Development":r==="Design"?t.title==="Graphic Design":r==="Marketing"?t.title==="Digital Marketing"||t.title==="Branding":!1);return e.jsx("div",{className:"2xl:container mx-auto",children:e.jsx("div",{className:"w-[90%] mx-auto",children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-9 py-10",children:s.map((t,i)=>e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md cursor-pointer",children:[e.jsx("img",{src:t.imageSrc,alt:t.title,className:"w-full h-48 md:h-60 object-cover rounded-md mb-4"}),e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-[#0B0366] mb-2",children:t.title}),e.jsx("h4",{className:"font-semibold flex gap-2 text-base sm:text-base md:text-xl lg:text-2xl",children:t.subtitle}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg lg:text-xl",children:t.description})]},i))})})})},c=()=>{const[r,s]=a.useState("All"),t=i=>{s(i)};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"2xl:container mx-auto",children:e.jsxs("div",{className:"w-[90%] mx-auto",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center py-10 space-y-2",children:[e.jsx("p",{className:"font-normal text-lg sm:text-xl md:text-2xl lg:text-xl",children:"CASE STUDIES"}),e.jsx("div",{className:"text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold",children:"Discover More Topics"})]}),e.jsx("div",{className:"mb-10",children:e.jsxs("ul",{className:"flex flex-wrap justify-center gap-4 mt-10",children:[e.jsx("li",{onClick:()=>t("All"),className:"w-auto p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl",children:"All"}),e.jsx("li",{onClick:()=>t("Code"),className:"w-auto p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl",children:"Code"}),e.jsx("li",{onClick:()=>t("Design"),className:"w-auto p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl",children:"Design"}),e.jsx("li",{onClick:()=>t("Marketing"),className:"w-auto p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl",children:"Marketing"})]})}),e.jsx("div",{children:e.jsx(o,{selectedCategory:r})})]})})})};export{c as B};