export const data = [
    {
        imageSrc:"./Rectangle 5.png",
        id : "1",
        icon :"./Vector (6).png",
        heading:" Article",
        text :"What if famous brands had Regular fonts? Meet RegularBrands",
        experience:"I have worked in UX for better part of a decade .f.." ,
        personLogo :"./imageLogo1.png",
        personName:"Sarthak kamra",
        views:"1.4k"
    },{
        imageSrc:"./Rectangle 5 (1).png",
        id : "2",
        icon :"./Vector (7).png",
        heading:" Education",
        text :"Tax benefits for Investment under National Pension Scheme Launched by Government",
        experience:"I have worked in UX for better part of a decade .f.." ,
        personLogo :"./imageLogo2.png",
personName:"sarah Weast",
views:"4.8k",
    },
    {
        imageSrc:"./Rectangle 5 (2).png",
        id : "3",
        icon :"./Vector (7).png",
        heading:" Education",
        text :"Tax benefits for Investment under National Pension Scheme Launched by Government",
        experience:"I have worked in UX for better part of a decade .f.." ,
        personLogo :"./imageLogo2.png",
personName:"Ronal Jones",
views:"800 ",
location:"Ahmedabad, India",
   date:"Fri,12Oct,2018",
   link: "visit Website",

    },
    {
        imageSrc:"./Rectangle 5 (1).png",
        id : "4",
        icon :"./Vector (7).png",
        heading:" Job",
        text :"Tax benefits for Investment under National Pension Scheme Launched by Government",
        experience:"I have worked in UX for better part of a decade .f.." ,
        personLogo :"./imageLogo2.png",
personName:"Joseph Gray",
views:"1.7k",
location:"Noida,India",
link:"Apply on Timesjobs",
jobType:"Innovaccer Anlytic ..."
    }
]






export const ItemCard=({data}) =>{
    return(
        <div>
        <div>
            <img src={data.imageSrc}alt=''></img>
        </div>
        <div className="p-4 text-slate-600 text-xs">
        <div className='flex'>
            <img src={data.icon} alt=''></img>
           <p className="pl-2">{data.heading}</p>
        </div>
        <div className='flex items-start mt-2'>
            <p className="font-bold text-black text-sm">{data.text}</p>
            <img src='./Group 3.png' alt=''></img>
            
        </div>
        <div className="pb-4">
            I {data.experience}
        </div>
        <div className="flex justify-between">
            <div className="flex items-center">
            <img src={data.personLogo} alt=""></img>
            <div className="pl-4">
                <p>{data.personName}</p>
                <p>{data.views} views</p>
            </div>
            </div>
            <div>
                <img src="./shareIcon.png"alt=""></img>
                share
            </div>

        </div>
        
        </div>
        <hr className="shadow-lg mb-6 border-gray-200 border-1"></hr>

        </div>
    )
}