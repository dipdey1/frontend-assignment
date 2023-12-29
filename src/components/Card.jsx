import React from 'react'
import Button from './coreComponents/Button'
import { useModal } from '../contexts/ModalContext'

const Card = ({jobObject}) => {
    const {handlePostEdit, handleJobDelete} = useModal()
  return (
    <div className='flex' style={{"paddingLeft":"85px", "paddingTop":"30px", "paddingBottom": "50px"}}>
        <div className='flex bg-White border-[1px] border-CardBorder rounded-[10px]' style={{ "height": "320px", "width" : "830px", "gap":"10px", "padding" :"16px 24px 16px 24px"}}>
            <div className='flex' style={{"height":"100%", "width":"100%"}}>
                <div className='flex flex-[1.84]' style={{"height":"100%"}}>
                    <div className='flex flex-[1.18] bg-White' style={{"height":"100%"}}>
                        <div>
                            <img src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" alt="netflixLogo" className='rounded-[5px]' style={{"height":"48px", "weight": "48px"}} />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col flex-[6.375] mx-2 mb-2' style={{"height":"100%","gap":"24px"}}>
                            <div className='flex flex-col'>
                                <div><span className='text-[24px] font-poppins'>{jobObject.jobTitle}</span></div>
                                <div><span className='font-poppins'>{jobObject.companyName} - {jobObject.industry}</span></div>
                                <div><span className='font-poppins' style={{"color":"#7A7A7A"}}>{jobObject.location}, Tamilnadu, India ({jobObject.remoteType})</span></div>
                            </div>
                            <div className='flex flex-col' style={{"gap":"8px"}}>
                                <div><span className='text-[16px] font-poppins'>Part-Time (9:00 am - 5:00 pm IST)</span></div>
                                <div><span className='text-[16px] font-poppins'>Experience ({jobObject.expMinimum} - {jobObject.expMaximum}years)</span></div>
                                <div><span className='text-[16px] font-poppins'>INR (₹) {jobObject.salaryMinimum} - {jobObject.salaryMaximum} / Month</span></div>
                                <div><span className='text-[16px] font-poppins'>{jobObject.employeeCount} employees</span></div>
                            </div>
                        </div>
                        <div className='flex'>
                            { jobObject.applyType === 'Quick Apply' ? 
                            <Button type={"button"} style={{"height":"40px","gap":"5px","width":"110px"}}>
                                <span className='text-White'>Quick Apply</span>
                            </Button> :
                            <button type="button" className="button-lg bg-white hover:bg-white/90 ml-2.5 rounded-md shadow-md border-Primary border-[1px]" style={{"height":"40px","gap":"5px","width":"147px"}}>
                            <span>External Apply</span>
                            </button>
}
                        </div>
                    </div>
                </div>
                <div className='flex flex-[1.84] justify-end' style={{"gap":"10px", "cursor":"pointer"}}>
                    <div onClick={() => handlePostEdit(jobObject.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                    <div onClick={() => handleJobDelete(jobObject.id)} style={{"cursor":"pointer"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                     </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Card