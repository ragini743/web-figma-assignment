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
        icon :"./Vector (8).png",
        heading:" Meetup",
        text :"FInanace & Investment Elite Social Mixer @Lujiazui",
        experience:"" ,
        personLogo :"./imageLogo3.png",
personName:"Ronal Jones",
views:"800 ",
location:"Ahmedabad, India",
   date:"Fri,12Oct,2018",
   link: "visit Website",
   optionalImage:"./calenderIcon.png"

    },
    {
        // imageSrc:"./Rectangle 5 (1).png",
        id : "4",
        icon :"./Vector (7).png",
        heading:" Job",
        text :"Software Devloper - ||",
        experience:"" ,
        personLogo :"./imageLogo4.png",
personName:"Joseph Gray",
views:"1.7k",
location:"Noida,India",
link:"Apply on Timesjobs",
jobType:"Innovaccer Anlytic ...",
optionalImage :"./outline-work.png",

    }
]






export const ItemCard=({data}) =>{
    return(
        <div>
            {
                (data.imageSrc)? <div className="mb-4 ">
                <img src={data.imageSrc}alt=''></img>
            </div>:null

            }
       
        <div className=" text-slate-600 text-xs pl-4 pb-4">
        <div className='flex'>
            <img src={data.icon} alt=''></img>
           <p className="pl-2">{data.heading}</p>
        </div>
        <div className='flex items-start mt-2'>
            <p className="font-bold text-black text-sm">{data.text}</p>
            <img src='./Group 3.png' alt=''></img>
            
        </div>
        <div className="pb-4">
            {data.experience?data.experience:<div className="flex pt-2  items-center w-[100%] text-[10px]">
                <div className=" flex">
                <img src={data.optionalImage}alt=""></img>
                <p>{data.date||data.jobType}</p>
                </div>
               <div className="flex ml-10">
                <img src="./mapIcon.png"alt=""></img>
                {data.location}
               </div>
                
                </div>}
        </div>
        {(data.link?<div className={ "my-2 py-1 border-gray-400 border-[1px] rounded-lg text-center w-[50%] mx-auto"}><a href="/">{data.link}</a></div>:null)}
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