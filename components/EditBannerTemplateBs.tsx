import React, { useState, useRef } from 'react';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineFileUpload } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import Modal from 'react-modal';
import html2canvas from 'html2canvas';

interface EditBannerProps {
  banner: {
    fontColor: string;
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: (updatedBanner: {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  }) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({
  banner,
  isOpen,
  onRequestClose,
  onSave,
}) => {
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [cta, setCta] = useState(banner.cta);
  const [image, setImage] = useState(banner.image);

  const bannerRef = useRef<HTMLDivElement>(null);

  const handleSave = () => {
    onSave({
      id: banner.id,
      title,
      description,
      cta,
      image,
      background: banner.background,
    });
  };

  const handleDownload = async () => {
    if (bannerRef.current) {
      const canvas = await html2canvas(bannerRef.current);
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `banner-${banner.id}.png`;
      link.click();
    }
  };

  return (
    <div style={{ width: 600 }}>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Edit Banner">
        <div className="p-6 bg-white rounded-lg shadow-lg" style={{ display: 'flex', justifyContent: 'center' }}>

          <div>
            <div className="flex items-center justify-between mb-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p className="text-xl font-bold" style={{ color: '#898787', fontSize: 23 }}>Edit Banner</p>
              <button style={{ fontSize: 20, backgroundColor: 'transparent', border: 'none' }} onClick={onRequestClose} className="text-gray-600 hover:text-gray-800">
                <RxCross2 />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div ref={bannerRef} style={{ width: '350px', height: '250px', position: 'relative' }}>
                  <img style={{ width: '350px', height: '250px' }} src={banner.background} alt="Banner Background" className="w-full h-48 object-cover" />
                  <div style={{ position: 'absolute', top: 5, left: 5, color: banner.fontColor }}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button>{cta}</button>
                  </div>
                </div>
              </div>

              <div className="mb-4 w-full" style={{ position: 'relative', top: 5 }}>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title" style={{ fontSize: 15, fontWeight: 'bold', color: '#898787' }}>Title</label>
                <div></div><input id="title" style={{ height: 25, width: 340, borderRadius: 5, borderColor: '#898787', borderStyle: 'double' }} type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <div className="mb-4 w-full" style={{ position: 'relative', top: 10 }}>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description" style={{ fontSize: 15, fontWeight: 'bold', color: '#898787' }}>Description</label>
                <div></div><input id="description" style={{ height: 25, width: 340, borderRadius: 5, borderColor: '#898787', borderStyle: 'double' }} type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <div className="mb-4 w-full" style={{ position: 'relative', top: 15 }}>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cta" style={{ fontSize: 15, fontWeight: 'bold', color: '#898787' }}>CTA</label>
                <div></div><input id="cta" style={{ height: 25, width: 340, borderRadius: 5, borderColor: '#898787', borderStyle: 'double' }} type="text" value={cta} onChange={(e) => setCta(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <div className="mb-4 w-full" style={{ position: 'relative', top: 20 }}>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image" style={{ fontSize: 15, fontWeight: 'bold', color: '#898787' }}>Image (Color Code)</label>
                <div></div><button style={{ height: 40, width: 40, borderRadius: 60, fontSize: 20, color: '#898787', border: 'none' }} className="bg-gray-800 bg-opacity-75 text-white p-2 rounded-full">
                  <MdOutlineFileUpload />
                </button><input id="image" type="text" value={image} onChange={(e) => setImage(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <button style={{ position: 'relative', top: 35, width: 340, height: 35, fontSize: 15, backgroundColor: '#294744', borderRadius: 5 }} onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Save
              </button>

              <button style={{ position: 'absolute', top: 632,left: 514, width: 340, height: 15, fontSize: 15, backgroundColor: 'transparent', border: 'none' }} onClick={handleDownload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                <BsDownload className="inline-block mr-2" /> Download
          </button>

            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditBannerTemplateBs;
