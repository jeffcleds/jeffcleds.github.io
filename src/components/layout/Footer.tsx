import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-6 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          © {new Date().getFullYear()} Ernie Joseph Cledera. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;