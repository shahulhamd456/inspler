import React from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { LinkProvider, useLinks } from './context/LinkContext';
import { ProfileEditor } from './components/profile/ProfileEditor';
import { LinkList } from './components/links/LinkList';
import { Plus, FolderPlus, Archive, Phone, ChevronDown } from 'lucide-react';
import { PhonePreview } from './components/layout/PhonePreview';
import clsx from 'clsx';

function LinkManager({ mobileView }) {
  const { addLink } = useLinks();

  return (
    <>
      <div className={clsx("lg:block", mobileView === 'link' ? 'block' : 'hidden')}>
        <ProfileEditor />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-6 items-start">
        {/* Left Column: Link Manager */}
        <div className={clsx(
          "bg-white rounded-[2rem] p-4 md:p-6 min-h-[500px] border border-gray-100 shadow-sm",
          "lg:block",
          mobileView === 'link' ? 'block' : 'hidden'
        )}>
          {/* Mobile Heading and Actions */}
          <div className="flex flex-wrap items-center gap-2 lg:gap-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mr-1 shrink-0">Links</h2>
            <button
              onClick={addLink}
              className="bg-[#6366F1] text-white px-3 lg:px-4 xl:px-5 py-2.5 rounded-xl font-bold shadow-md shadow-indigo-200 hover:bg-indigo-600 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-indigo-300 hover:scale-[1.02] active:scale-95 text-sm flex items-center gap-1.5 shrink-0 whitespace-nowrap"
            >
              <Plus size={16} strokeWidth={3} /> <span className="hidden md:inline">add link</span>
            </button>
            <button className="bg-white border border-gray-200 text-gray-600 px-3 lg:px-3 xl:px-4 py-2.5 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 transition-all duration-300 ease-out hover:shadow-md hover:scale-[1.02] active:scale-95 text-sm flex items-center gap-2 shrink-0 whitespace-nowrap">
              <FolderPlus size={16} strokeWidth={2.5} /> <span className="hidden md:inline">add collection</span>
            </button>
            <button className="bg-white border border-gray-200 text-gray-600 px-3 lg:px-3 xl:px-4 py-2.5 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 transition-all duration-300 ease-out hover:shadow-md hover:scale-[1.02] active:scale-95 text-sm flex items-center gap-2 shrink-0 whitespace-nowrap">
              <Archive size={16} strokeWidth={2.5} /> <span className="hidden xl:inline">view archive</span> <span className="bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded-md text-[10px] ml-0.5 font-bold">2</span>
            </button>
          </div>

          {/* Add Contact Card */}
          <div className="bg-white rounded-[1.5rem] p-2 mb-4 border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 rounded-xl transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[1rem] bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center">
                  <Phone size={22} className="fill-current" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 text-sm">Add Contact</h3>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">Let visitors reach you directly</p>
                </div>
              </div>
              <div className="text-gray-300 group-hover:text-gray-500 pr-2">
                <ChevronDown size={20} />
              </div>
            </div>
          </div>

          <LinkList />
        </div>

        {/* Right Column: Preview */}
        <div className={clsx(
          "lg:block",
          mobileView === 'preview' ? 'block' : 'hidden'
        )}>
          <PhonePreview />
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [mobileView, setMobileView] = React.useState('link'); // 'link' | 'preview' | 'design' | 'analysis'

  return (
    <LinkProvider>
      <AppLayout mobileView={mobileView} onMobileViewChange={setMobileView}>
        <LinkManager mobileView={mobileView} />
      </AppLayout>
    </LinkProvider>
  );
}
