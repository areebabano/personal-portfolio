import "./globals.css";
import 'tailwindcss/tailwind.css'; 

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <title>My Website</title>
    </head>
    <body className="bg-black text-white"> {/* Apply global styles or classes here */}
      {children}
    </body>
  </html>
  );
}


// import './globals.css'; // Import your global CSS
// import 'tailwindcss/tailwind.css'; // Import Tailwind CSS (if it's installed properly)

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <title>My Website</title>
//       </head>
//       <body className="bg-black text-white"> {/* Apply global styles or classes here */}
//         {children}
//       </body>
//     </html>
//   );
// }

