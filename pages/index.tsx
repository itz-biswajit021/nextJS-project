import React, { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import bannersData from '../data/banners.json';



const Home: React.FC = () => {
  const [banners, setBanners] = useState(bannersData);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(null);

  const handleEdit = (banner: any) => {
    setCurrentBanner(banner);
    setEditModalOpen(true);
  };

  const handleSave = (updatedBanner: any) => {
    setBanners(banners.map((banner) => (banner.id === updatedBanner.id ? updatedBanner : banner)));
    setEditModalOpen(false);
    setCurrentBanner(null);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {banners.map((banner) => (
          <BannerImageComp key={banner.id} banner={banner} onEdit={() => handleEdit(banner)} />
        ))}
      </div>
      {currentBanner && (
        <EditBannerTemplateBs
          banner={currentBanner}
          isOpen={isEditModalOpen}
          onRequestClose={() => setEditModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Home;
