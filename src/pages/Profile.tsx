import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8"
        >
          My Profile
        </motion.h1>
        <p className="text-gray-600 mb-8">Please sign in to view your profile</p>
      </div>
    </div>
  );
};

export default Profile;