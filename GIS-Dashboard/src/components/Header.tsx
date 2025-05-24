import React from 'react';
import { Upload, Download, Trash2, Map } from 'lucide-react';

interface HeaderProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  exportResults: () => void;
  clearAll: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  fileInputRef, 
  handleFileUpload, 
  exportResults, 
  clearAll 
}) => {
  return (
    <div className="shadow-lg border-b-4" style={{backgroundColor: '#D4D4CE', borderColor: '#287094'}}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Map className="w-8 h-8" style={{color: '#023246'}} />
              <h1 className="text-3xl font-bold" style={{color: '#023246'}}>GIS TOOL</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              ref={fileInputRef}
              type="file"
              accept=".geojson,.wkt,.shp"
              onChange={handleFileUpload}
              className="hidden"
              multiple
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl hover:opacity-90"
              style={{backgroundColor: '#287094'}}
            >
              <Upload className="w-5 h-5" />
              <span>Upload Files</span>
            </button>
            
            <button
              onClick={exportResults}
              className="text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl hover:opacity-90"
              style={{backgroundColor: '#287094'}}
            >
              <Download className="w-5 h-5" />
              <span>Export</span>
            </button>
            
            <button
              onClick={clearAll}
              className="text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl hover:opacity-90"
              style={{backgroundColor: '#023246'}}
            >
              <Trash2 className="w-5 h-5" />
              <span>Clear All</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;