import React, { useState } from "react";
import Dock from "react-osx-dock";
import {motion} from "framer-motion";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  // var portfolio = false;
  const [p, setP] = useState("portfolio");
  const [show, setShow] = useState(true);
  const [large, setLarge]= useState(true)
  const [hover, setHover]= useState(false)

 const d = new Date();
 const day = d.toLocaleString('en-US',{weekday:'short'});
 const date = d.getDate()
 const month = d.toLocaleString('en-US',{month:'short'});
 const time = d.toLocaleString('en-US',{hour:'numeric',minute:'numeric',hour12:true});

  return (
    <>
     <Head>
        <title>Devansh Khullar | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[url('/wallpaper.jpg')] h-screen w-screen bg-cover bg-no-repeat relative overflow-x-hidden ">
        <div className="bg-black bg-opacity-40 flex justify-between">
        <div className="flex justify-evenly" >
        <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 1024 1024" height="18" width="18" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 mt-1 w-5 ml-4"><path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path></svg>
      <div>

      <ul className="list-none flex text-white " >
        <li className="ml-5 font-semibold pt-0.5 capitalize "  >
          {p}
          </li>
        <li className="ml-5 my-0.5  hidden md:block " >File</li>
        <li className="ml-5  my-0.5 hidden md:block "  >Edit</li>
        <li className="ml-5 my-0.5  hidden md:block "  >View</li>
        <li className="ml-5  my-0.5 hidden md:block "  >Go</li>
        <li className="ml-5  my-0.5 hidden md:block "  >Window</li>
        <li className="ml-5 my-0.5  hidden md:block "  >Help</li>
      </ul>
      </div>

        </div>
        <div className="mr-4 text-md flex my-0.5  text-white " >
          <div>
            <Image src='/wifi.svg' width={20} height={20} className='mt-0.5 mr-6 hidden md:block' />
          </div>
          <div>
            <Image src='/search.svg' width={16} height={16} className='mt-1 mr-6 hidden md:block' />
          </div>
         <div>
         <svg width="351" height="348" viewBox="0 0 351 348" fill="white" xmlns="http://www.w3.org/2000/svg" className="mt-1 mr-6 w-4 h-4 hidden md:block"><path d="M87.75 46.2C97.0591 46.2 105.987 49.445 112.569 55.2211C119.152 60.9972 122.85 68.8313 122.85 77C122.85 85.1687 119.152 93.0028 112.569 98.7789C105.987 104.555 97.0591 107.8 87.75 107.8C78.4409 107.8 69.5131 104.555 62.9305 98.7789C56.348 93.0028 52.65 85.1687 52.65 77C52.65 68.8313 56.348 60.9972 62.9305 55.2211C69.5131 49.445 78.4409 46.2 87.75 46.2ZM263.25 0C286.523 0 308.842 8.11248 325.299 22.5528C341.755 36.9931 351 56.5783 351 77C351 97.4217 341.755 117.007 325.299 131.447C308.842 145.888 286.523 154 263.25 154H87.75C64.4773 154 42.1577 145.888 25.7014 131.447C9.24506 117.007 0 97.4217 0 77C0 56.5783 9.24506 36.9931 25.7014 22.5528C42.1577 8.11248 64.4773 0 87.75 0H263.25ZM87.75 30.8C73.7864 30.8 60.3946 35.6675 50.5208 44.3317C40.647 52.9958 35.1 64.747 35.1 77C35.1 89.253 40.647 101.004 50.5208 109.668C60.3946 118.333 73.7864 123.2 87.75 123.2H263.25C277.214 123.2 290.605 118.333 300.479 109.668C310.353 101.004 315.9 89.253 315.9 77C315.9 64.747 310.353 52.9958 300.479 44.3317C290.605 35.6675 277.214 30.8 263.25 30.8H87.75Z" fill="white" stroke="white"></path><path d="M263.25 194H87.75C64.4773 194 42.1577 202.112 25.7014 216.553C9.24506 230.993 0 250.578 0 271C0 291.422 9.24506 311.007 25.7014 325.447C42.1577 339.888 64.4773 348 87.75 348H263.25C286.523 348 308.842 339.888 325.299 325.447C341.755 311.007 351 291.422 351 271C351 250.578 341.755 230.993 325.299 216.553C308.842 202.112 286.523 194 263.25 194V194ZM263.25 317.2C249.286 317.2 235.895 312.333 226.021 303.668C216.147 295.004 210.6 283.253 210.6 271C210.6 258.747 216.147 246.996 226.021 238.332C235.895 229.667 249.286 224.8 263.25 224.8C277.214 224.8 290.605 229.667 300.479 238.332C310.353 246.996 315.9 258.747 315.9 271C315.9 283.253 310.353 295.004 300.479 303.668C290.605 312.333 277.214 317.2 263.25 317.2Z" fill="white" stroke="white"></path></svg>
         </div>
         <div >

           {day} {date} {month} &nbsp; {time}
         </div>
        </div>
        </div>

        {show && (
          <motion.div  drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 1000,
            bottom: 100,
          }} initial={{ opacity: 0 }}
          animate={{ opacity: 1,duration:1 }}
          exit={{ opacity: 0 }} className={`${large?"w-screen":"w-1/3"} bg-white border-1 rounded-xl `}>
            <div className="bg-white border-b-2 rounded-t-xl border-gray-300 flex " >
              <div className="rounded-full bg-red-500 bg-opacity-90 h-3 w-3 mt-2 mb-1 ml-2" onClick={()=> {setShow(false)}} >

              </div>
              <div className="rounded-full bg-yellow-500 bg-opacity-90 h-3 w-3 mt-2 mb-1 ml-1 " >
                
              </div>
              <div className="rounded-full bg-green-500 bg-opacity-90 h-3 w-3 mt-2 mb-1 ml-1 " onClick={()=>{setLarge(!large)}} >
             
              </div>
              </div>
               <iframe
              src="https://match-my-service.vercel.app/"
              className={`${
                p === "matchmyservice" ? "block" : "hidden"
              } w-full rounded-b-xl h-[80vh] ${large?"md:h-[83vh]":"md:h-[75vh]"}  `}
            />
            <iframe
              src="https://devansh-khullar.vercel.app/"
              className={`${
                p === "portfolio" ? "block" : "hidden"
              } w-full rounded-b-xl h-[80vh] ${large?"md:h-[83vh]":"md:h-[75vh]"}  `}
            />
            <iframe
              src="https://moda-online-shopping.vercel.app/"
              className={`${
                p === "moda" ? "block" : "hidden"
              }  w-full rounded-b-xl h-[80vh] ${large?"md:h-[83vh]":"md:h-[75vh]"}`}
            />
            <iframe
              src="https://video-chat-app-14.netlify.app/"
              className={`${
                p === "videochat" ? "block" : "hidden"
              }  w-full rounded-b-xl h-[80vh] ${large?"md:h-[83vh]":"md:h-[75vh]"}`}
            />
            <iframe
              src="https://my-memories-app123.netlify.app/"
              className={`${
                p === "memories" ? "block" : "hidden"
              }  w-full rounded-b-xl h-[80vh] ${large?"md:h-[83vh]":"md:h-[75vh]"}`}
            />
          </motion.div>
        )}

        <div className=" hidden md:block">
          <Dock
            className="z-0 absolute bottom-[1%] md:left-1/4 ml-24"
            backgroundClassName="bg-slate-300 bg-opacity-20 border-1 rounded-3xl"
            width={400}
            magnification={0.5}
            magnifyDirection="up"
          >
            {["matchmyservice","moda", "portfolio", "memories", "videochat"].map(
              (item, index) => (
                <Dock.Item
                  className=" px-2"
                  key={index}
                  onClick={()=>{ setP(item); setShow(true)}}
                >
                  <div className="bg-white rounded-2xl flex justify-center bg-opacity-60 p-2 h-18 w-18" >

                  <img src={`${item}.png`}/>
                  </div>
                </Dock.Item>
              )
            )}
          </Dock>
        </div>
        <div className=" block md:hidden ">
          <Dock
            className="z-0 absolute bottom-[8%] "
            backgroundClassName="bg-slate-300 bg-opacity-20 border-1 rounded-lg"
            width={250}
            magnification={1}
            magnifyDirection="up"
          >
            {["matchmyservice","moda", "portfolio", "memories", "videochat"].map(
              (item, index) => (
                <Dock.Item
                  className="px-2 "
                  key={index}
                  onClick={() => {setP(item); setShow(true)}}
                >
                  <div  className="bg-white rounded-lg flex justify-center bg-opacity-60 p-2 h-10 w-10"  >

                  <img src={`${item}.png`} />
                  </div>
                </Dock.Item>
              )
            )}
          </Dock>
        </div>
      </div>
    </>
  );
};
