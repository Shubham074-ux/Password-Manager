import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid'; 


const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [passwordArray, setPasswordArray] = useState([]);
  const [form, setform] = useState({ site: "", username: "", password: "" });

  const getPasswords = async ()=>{
    let req = await fetch("http://localhost:3000/")
    let passwords =  await req.json()
    console.log(passwords)
    setPasswordArray(passwords);
    
  }
  

  useEffect(() => {
    getPasswords()


    // else{
    //   passwordsArray = []
    // }
  }, []);

  const showpassword = () => {
    passwordRef.current.type = "text";
    if (
      ref.current.src ===
      "data:image/png;base64,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"
    ) {
      ref.current.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyu4f6IJgFNBUYlcVUsvZGuZrLBA1BAy2C7g&s";
      passwordRef.current.type = "password";
    } else {
      ref.current.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAaVBMVEX///8AAAD5+fn8/PzV1dXw8PDm5ubf39/t7e3c3NzQ0NDq6urY2NhBQUHFxcU5OTksLCxpaWlYWFhOTk5ISEhTU1OsrKy3t7cyMjIiIiK9vb1ubm6enp4YGBiEhIR4eHiPj48QEBBgYGB1Jd6rAAALuklEQVR4nN1d2YKiSBBUTgE5vEAQBfz/j1y1tRslo8iCRMeNxxkbiDryrqyZN+/AmH0r6i6Zuf3pjxqKDUEmdz79VQORE2TmsffpzxqGhCIz3y4//V2DcCbJzDdfyaakycy337jSFoDMPPxGKXBAbJLFpz9NH0GD2Hyj9nSP/yc21h6yCT79bfrwQ7hv3E9/mz4wm/AL9Y0fIzZb69Pfpg+LtNGu+EZbgPBrHivtC20BB7KJv9AWwGyOX+itYTbf6Ht6tHPzpWwsKKGb4fvGNI0LTFPwO3nA2nOvLdMWruVHUZGlaXlBmmZFFPm+59hvo6WwBfS0p5We1nHTmeD9bnUq08Jy3sLIh1anli1QUlGfXxw3h7os3qC/ltAj0IhyUNG4V+zXVR1N7WS48PVsW+DE4HJDvK6KaflgfZPw/JsIi/gu8rjyP8OGp28qDS43HOsJp8dpxrDBElGBszUZHw970v0xmxQHFVSIi8VE8tqCo5v3etIcUUbTSd1p6OC1EvdJ6MFkLvIyncYVHG4LoIgvC9t0khiKBQVsjy1Q4A3HwbmcIpTqNeh96piNDTILfDrZBGwC+LpYuRbKYeLsD3k1wVrDbHKlLbAdSeaiRst3slFqT1vHngHYy4dRXBhPU7Ixu66MPkpxm2AJPem5cujKXZgf8yQOt5vdDZttGCd6m2krrkOxvsnVHoGflmkWWW5gX2MAduBaUVaeqtUOD0/nDam0lFbYAkPi0LYXlfWBKyIqaXcUR9XDoZ5I4GclTxvtCuGlthxqC6hguFHK4bOvhdngTOGo/I0ZWHW/EG9WwlLNh68amVszgkgZx/mZHNFsJM7ezAUit8t1H5s8kmDxgx6bfrz4XKz6FFAqQOMKo9fZElAGzrpn88iIAZsRBJOwcf2zms5JIBERcOJGewln18zUi60aLQYcWFrzhMHa8wlBqgxSHUba0Q7XaZRhM7OUa/o8io2zY3LRzngg2JFKC+xGsFnohCal6jod1SYNBwtOLS5yNbdGMQGbQDtkLOV8uAoHIRwk05wBUQkpG0qlp7cDFoBCju3xlIlZhCnWoPoyzVnBh+2iJWRzFHMMIyxID5pDZmORUl20vQ+X4F6somup+AQty8bAuqu+PQhnPIS05wU23jgnHXcNP+YRy1rC4LgcGwO7HjX/Kfgh2a8hrvCkxVaameJB5T4jQk9oitavYKn6gMoUiAy+hOl7wuzssXj6nQ1f1Mj57AVaALzKJANZevvXwcBsBOuhI7Q5c4YQMJHUDbsT62DNJsgGCc5tryNtIOlOcJnNPGwLyCUkIJuqZ27MFCyymN5wFtSeuVzaOALh4TxVzw0aBRi4wmxiuYqYCEgBcrX8wkXhuAL+yTtsgRnycNaKsBC0yDAXVZXqG9hgKw0qXHUmW1HdLXeOAGlPuG1Q1VxfaBTrm/46Gy5MZGKBN5hAkPXXgr1DeyLnM6enBoT7OGFRBRsxfYPCxAfqx8C8PHNWiiqeIjY3LnDkCfkMjGCWRLJVgTuRqPoNSAl2gkIm7fMfWSU52O24IhGTacCEXr1um7Qhf8fzgXoyRXK2AC3SmhdxC+owKlaGBzpzD4hpT5MWAs+1icBW3vOiIP0ZVjE2Nhj0tvYAi4y3dRf0Hz8Pi5QNTSv29kLzaPtSZZG1oN7+dxylZBqtBda/YQdgKnCDU/2r7AapHAG9bcrH7qY38Ib5dpubLBBi49CDd1edC9KOybl7FkYcpmLjkyr68KM6Seu6YZfh8atLGxkpYJQN9fSbeqdzSiu2SaVxJCORkdABaa3cslDk7gfxCwrdJ++hqSZkC9AFcBdrxWiIf9coxDW6tuwKBoektCe5tBuDlttbfspg0dVRteFMPDcGGRMqSJeMLckucLuSMlV5a4mIFCAl2mFGLb9K47Fel8xVrhiQjYyEpsROTJrvOnkprzvjNzNoYjbU448zaq+SbjUiQ8/MRYBiZSrAhtodITlfR40qQqK85h7LcrGdM9rqJAO2FW2Ybfm1FpQ0u7tBS2iCHkd60gtSmkV0bqmp2c8l9Mxv1YEF2ezHSei6IZ55zT6R7kgnS4bRtQD+xn05TY6Atm2vDtqCHD5+TQex6f5COi6UAiPY0JUwP1uDdmfGWM3nvy2He3QNXmmgPOBnLYFEBnehUQ0EWrlzrG96TqxA0IP/SG745Oipz8i1vpaQwLvWtCq05yAJ7ZImc/M7z/S8ccttqGhIOxaiCN4OYAPW0Z+ZD0LSzJJ1Mk7V9u0cfJRJnw0dC2qH9zN68Hhb1KbIPNVSEvbbA7r7hj4ukrdD4iB+w2zMQEbdVm3Zjm0BHW/jgoAe9eeoGLCjDqxYMz1aq7bjgtloSWiTToiFL6s1o2MsNesddL5505YCuJZDI9wA6uC6eRea82u2gAZInCWn1ohJ2AIgJN71WIA6YI2bgUoB4urPPDagTONmo9DRfMJWsehf7jjyBmdo8vwU3cRIEOHzHg1LQi9BPS05FCibyxBpNi4c5oHBJkDZcPLXJtijnNw57iIkxQZlzkMgcNEJc0aHG0VpqAwb9AJYA2JmDf0XjPgmWgR8qKUAaITTZFATwrNyDAFNRGn0oIyqo4lRbQF4AoDBZlBTozZUWgD0GFkp/WFU5N8wihu0emdpsqGTwNsedYuOeiQMNgX5Rg1gO43s5ZH0rhe0bfacuRlJZp4jKUCSoTXME9C5lYSRSR+tbpCEprLA6/7vmZHR5ys4RUHQSmODtp6I0rmQw2UWoA86MmSacVKWaw1m07EcmY4jLCO+OAQMZ63YNBOweVWB/Ng+8BvmvNCgUzLOEW5r2NGgIWXac4aOs0geUBwp4gQ6/bJHgYalP/PgCbmEHHWr9fu9Tq8DxTnJipPtMP1UcSp6l/rX5YpjNrT2dOvm/v+HSKvTgeIE3YrnF7pRTbqWcR09xC8dm8RsbCutNptVGenWsCrONobMVmpGcHn50/fuq9QKWus0gJUqwOo07SBYDGjconAeG3bJg2kYtuNfuxxnhe/YhvGyPHAc+ijb6FDVDG98B4g7TPwO2SZNtqIdjFhBrKKt2/vYzKWadSkO6r+RzUGo9pqoV3lA9uYLurLrjjyT2TlYex5lex+ru85UMi2UMBuNpDcHajZxLVLVg9tM6ETVGVB3N2o2HEO6Fw6MqgvPTU/fqaP6fCETOO8pVNf5i56OYI3ELSggbH+FcIvDrM8ZHntdnSLpeYFwC+f+AN8uGnqrhGkren9MwoYoxOrMTuYN6EBmexnDLxVeaeapv7A8PxWeln1ueAUz/iEsBUx177E71nW2ZPIxlhmOA3TGSVZCX1xhZkvSUxn1ijcnKk9sJlcI65uLNcC9IiM+V3VmgR1kW1ldnfnNdB/PlGZjFPwIXxLuzoc6La6359zgeH6R1ofzLhwW9RSfm5mtl1JqjnmS7O9IkvzYDOLxA83KFA5GJy9HQP4CBHvX/I/YzFhC+mvYOCdtYaSHBv7PFHdIRhV+33gqJ0VX6iluEbKz0Yl/hFVma0fVxyLI+B1DNbArbuYDjtnI65sbnGL8NRMv2BYPS8jBd+FNw2a2KEQFW1i0Iovv86R/YY4uzPij4j+7dzgO3Ux3L66yWSwbFWFp419PeMuvWW5HXQa035akz23gp056Z7FVrwcq0nhdwy8LsISZ9gZmI6qrbaNHpNn03HWoaBg96R18Vz5+Wq/YAiG8uDu9187BJmXzZiIJ3YbjZ2W164l+5OuqzHxWEsF9sy3wCnPh+dGFErGLmvB8KrPId/k3573dFqBgLALXWy79qCjSC4oi8pdLzwls3WxxACXLG9n8wTRH3Q1Mnmn5Wa5TS4EpgHfftBJ6GmCB8oVsFP1gvpBN8K6c9FuAtefktsAEwGx0Tvz/K1DYAswWWf8S8LUL+y9ks4D+zXvsNFko6tO+UAr8v2wBEyd3JrlVeFrYUAqsPv1pA4A9adFL994EqD0nuIN3eiA2rDMo/xyALZB8+ruGga5SzT/9WQNBVhBvPv1Vg0H4nvV/o9eok+3UfjAAAAAASUVORK5CYII=";
      passwordRef.current.type = "text";
    }
  };

  const savePassword = async() => {
    //if any such id exist in db delete it
    if(form.site.length >3 && form.username.length >3 && form.password.length > 3){
    
    await  await fetch("http://localhost:3000/" , {method:"DELETE" , headers:{"Content-type":"application/json"}, body:JSON.stringify({id:form.id})}) 


    setPasswordArray([...passwordArray, {...form,id:uuidv4()}]);
     await fetch("http://localhost:3000/" , {method:"POST" , headers:{"Content-type":"application/json"}, body:JSON.stringify({...form ,id:uuidv4() })}) 
    // localStorage.setItem("password", JSON.stringify([...passwordArray, {...form,id:uuidv4()}]));

    // console.log([...passwordArray, form]);
    setform({ site: "", username: "", password: "" })}
    else{
      toast("password , username and site length should be minimum of 4 characters!")
    }
  };

  const deletePassword = async (id) => {
   console.log("deleting the password with id",id);
   let c = confirm("Do you really want to delete your password?")
   if(c){
    setPasswordArray(passwordArray.filter(item=>item.id !== id));
    let res = await fetch("http://localhost:3000/" , {method:"DELETE" , headers:{"Content-type":"application/json"}, body:JSON.stringify({id})}) 

    // localStorage.setItem("password", JSON.stringify(passwordArray.filter(item=>item.id !== id)));
    // console.log([...passwordArray, form]);
  

  }};

  const editPassword = (id) => {
    console.log("editing the password with id",id);
    setform({...passwordArray.filter(i=>i.id===id)[0],id:id})
    setPasswordArray(passwordArray.filter(item=>item.id !== id))
       
      };
    
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

const copyText =(text)=>{
  toast('🦄 copied to clipboard!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
navigator.clipboard.writeText(text);
  }
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition= "Bounce"
/>

{/* Same as */}
<ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]">
       </div>
      </div>
      <div className="p-2 md:p-0 md:max-w-4xl md:mycontainer ">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-center text-lg">
          Your own password manager
        </p>
        <div className=" flex flex-col p-4  text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handlechange}
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            name="site"
            id="site"
          />
          <div className="flex flex-col md:flex-row  w-full gap-8 ">
            <input
              value={form.username}
              onChange={handlechange}
              placeholder="Enter UserName"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name="username"
              id="username"
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handlechange}
                ref={passwordRef}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="password"
                name="password"
                id="password"
              />
              <span
                className="cursor-pointer absolute right-1 top-[3px]"
                onClick={showpassword}
              >
                <img
                  ref={ref}
                  width={15}
                  height={20}
                  className=" my-2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyu4f6IJgFNBUYlcVUsvZGuZrLBA1BAy2C7g&s"
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center hover:bg-green-400 px-4 py-2 font-bold bg-green-300 rounded-full w-fit"
          >
            <lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="hover"
              // style="width:250px;height:250px"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && (
            <div>No password available currently </div>
          )}
          {passwordArray.length != 0 && (
            <table class="table-auto w-full rounded-md overflow-hidden mb-10">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-200">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2  text-center  border border-white">
                      <div className="flex items-center justify-center">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                          <div className="lordiconcopy" onClick={()=>(copyText(item.site))}>
                            <button className="text-xs font-bold ml-2 text-green-800 border border-2 rounded-xl border-green-300 bg-green-300 w-10 h-17">
                              copy
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="  py-2 text-center  border border-white">
                      <div className="flex items-center justify-center">
                        <span>{item.username}</span>
                        
                          <div className="lordiconcopy" onClick={()=>(copyText(item.username))}>
                            <button className="text-xs font-bold ml-2 text-green-800 border border-2 rounded-xl border-green-300 bg-green-300 w-10 h-17">
                              copy
                            </button>
                          </div>
                        </div>
                      </td>

                      <td className="py-2 text-center w-32 border border-white">
                      <div className="flex items-center justify-center">
                        <span>{item.password}</span>
                        
                          <div className="lordiconcopy" onClick={()=>(copyText(item.password))}>
                            <button className="text-xs font-bold ml-2 text-green-800 border border-2 rounded-xl border-green-300 bg-green-300 w-10 h-17">
                              copy
                            </button>
                          </div>
                        </div>
                      </td>

                      <td className="py-2 text-center w-32 border border-white">
                        <span className="cursor-pointer mx-2" onClick={()=>{editPassword(item.id)}}>
                        <lord-icon  src="https://cdn.lordicon.com/wuvorxbv.json"
                                    trigger="hover"
                                    style={{"width":"25px","height":"25px"}}>
                        </lord-icon>
                        </span>
                        <span className="cursor-pointer mx-2" onClick={()=>{deletePassword(item.id)}}>
                        <lord-icon  src="https://cdn.lordicon.com/drxwpfop.json"
                                    trigger="hover"
                                    style={{"width":"25px","height":"25px"}}>
                        </lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
