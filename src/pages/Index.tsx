import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 pt-20 pb-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sticky Sidebar */}
          <aside className="lg:w-72 xl:w-80 shrink-0">
            <div className="lg:sticky lg:top-24">
              <Sidebar />
            </div>
          </aside>
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <MainContent />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
