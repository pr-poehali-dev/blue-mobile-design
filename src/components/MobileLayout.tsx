import { ReactNode } from "react";
import BottomNavigation from "./BottomNavigation";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <main className="container max-w-md mx-auto">{children}</main>
      <BottomNavigation />
    </div>
  );
};

export default MobileLayout;
