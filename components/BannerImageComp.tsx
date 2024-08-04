import React from 'react';
import { MdEdit } from "react-icons/md";

interface BannerProps {
  banner: {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
    fontColor: string;
  };
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ banner, onEdit }) => {
  return (
    <div className="relative m-2" style={{display: 'flex', justifyContent:'center'}}>
      <div className="relative mb-4"> <img style={{ width: '350px', height: '250px' }} src={banner.background} className="w-full h-48 object-cover" />


        <div style= {{position: 'relative', top: -290, left:20}}>
        <div
          className="w-full h-full opacity-80"
          style={{ backgroundColor: banner.image }}
        ></div>
        <button 
          onClick={onEdit} 
          className="absolute top-2 right-2 p-2" style={{ backgroundColor: 'transparent', border: 'none',color: '#D5D0D0', position: 'relative', left: 295, top: 40 }}
        >
          <MdEdit size={20} />
        </button>

        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="flex flex-col justify-between h-full">
            <div className="mb-2">
              <h3 className="text-xl font-bold" style={{ color: banner.fontColor, position: 'relative', top: 10, fontSize: 20 }}>
                {banner.title}
              </h3>
            </div>
            <div className="mb-2">
              <p className="text-sm" style={{ color: banner.fontColor,  position: 'relative', top: 10, fontSize: 13 }}>
                {banner.description}
              </p>
            </div>
            <div className="mt-2" style = {{border:'#E13B3B'}}>
              <div
              style = {{
                height:25,
                width:100,
                backgroundColor: '#ffffff',
                borderStyle: 'outset',
                position: 'relative',
                top:120,
                left: 20,
              }}>
                
              </div>
              <a href="#" className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full" style={{ color: '#000000',  position: 'relative', top: 95, left:30 }}>
                {banner.cta}
              </a>
            </div>
          </div>
        </div>
        
        </div>


      </div>
    </div>
  );
};

export default BannerImageComp;
