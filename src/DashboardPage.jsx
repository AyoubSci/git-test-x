/*
import DSection from "./DSection";
import DTopBar from "./DTopBar";

export default function DashboardPage(){


    const Sections = [

        // {id:1, title:"", desc:""},
        // {id:2, title:"", desc:""},
        // {id:3, title:"", desc:""},
        // {id:4, title:"", desc:""},
        // {id:5, title:"", desc:""},
        // {id:6, title:"", desc:""},
        // {id:7, title:"", desc:""},
        {id:1,title:"A great start", desc:"Hey Hey Hey Hey Hey "},
        {id:2,title:"Some struggle", desc:"Wsup pwoqeipqwpoeiqwopiepqw"},
        {id:3,title:"Pure hatred", desc:"sdfljskdfjsdjflksdjlkfsdlkfjsdlkfjsdlkfj"},
        {id:4,title:"Idk why", desc:"sdklfjklsdjfklsdjfsdkflsdjfklsdjflksdjlkfjlsdkjflskdj"},
        {id:5,title:"did I even try", desc:"vl;xckvl;xckv;lxckvl;xcklvcx"},
        {id:6,title:"Seems like a good title", desc:"qwpoeiopqweioqpwieopqw"}


    ]


    const SectionsAffichage = Sections.map((SectionInp) => {

        if(SectionInp.title == null || SectionInp.title == "")
            {
                return(<div></div>)
            }

        return(
        
        
        <DSection title={SectionInp.title} description={SectionInp.desc} />
        
        
        
        
    
              )

    })

    




    return(<div style={{position:"absolute",margin:"0",padding:"0",height:"100vh",width:"100%", backgroundColor:"#1A4372"}}>
        


        
    
        <div style={{display:"inline", height:"100%",width:"100%"}}>
            {SectionsAffichage}
        </div>



    </div>)


}*/

/*
import DSection from "./DSection";
import DTopBar from "./DTopBar";

export default function DashboardPage() {
  const Sections = [
    { id: 1, title: "A great start", desc: "Hey Hey Hey Hey Hey " },
    { id: 2, title: "Some struggle", desc: "Wsup pwoqeipqwpoeiqwopiepqw" },
    { id: 3, title: "Pure hatred", desc: "sdfljskdfjsdjflksdjlkfsdlkfjsdlkfjsdlkfj" },
    { id: 4, title: "Idk why", desc: "sdklfjklsdjfklsdjfsdkflsdjfklsdjflksdjlkfjlsdkjflskdj" },
    { id: 5, title: "did I even try", desc: "vl;xckvl;xckv;lxckvl;xcklvcx" },
    { id: 6, title: "Seems like a good title", desc: "qwpoeiopqweioqpwieopqw" },
  ];

  const SectionsAffichage = Sections.map((SectionInp) => {
    if (!SectionInp.title) return <div key={SectionInp.id}></div>;

    return (
      <DSection key={SectionInp.id} title={SectionInp.title} description={SectionInp.desc} />
    );
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gridAutoRows: "max-content",
        gap: "20px",
        padding: "20px",
        height: "",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "#1A4372",
        boxSizing: "border-box",
      }}
    >
      {SectionsAffichage}
    </div>
  );
}*/



/*
import DSection from "./DSection";
import DTopBar from "./DTopBar";

export default function DashboardPage() {
  const Sections = [
    { id: 1, title: "A great start", desc: "Hey Hey Hey Hey Hey " },
    { id: 2, title: "Some struggle", desc: "Wsup pwoqeipqwpoeiqwopiepqw" },
    { id: 3, title: "Pure hatred", desc: "sdfljskdfjsdjflksdjlkfsdlkfjsdlkfjsdlkfj" },
    { id: 4, title: "Idk why", desc: "sdklfjklsdjfklsdjfsdkflsdjfklsdjflksdjlkfjlsdkjflskdj" },
    { id: 5, title: "did I even try", desc: "vl;xckvl;xckv;lxckvl;xcklvcx" },
    { id: 6, title: "Seems like a good title", desc: "qwpoeiopqweioqpwieopqw" },
  ];

  const SectionsAffichage = Sections.map((SectionInp) => {
    if (!SectionInp.title) return <div key={SectionInp.id}></div>;

    return (
      <DSection key={SectionInp.id} title={SectionInp.title} description={SectionInp.desc} />
    );
  });

  return (*/
    /*<div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gridAutoRows: "max-content",
        gap: "20px",
        padding: "20px",
        height: "100vh", // Ensures the blue background always spans the full screen height
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "#1A4372",
        boxSizing: "border-box",
      }}
    >
      {SectionsAffichage}
    </div>*/
    /*<div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "20px",
      padding: "20px",
      height: "100%",
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#1A4372",
      boxSizing: "border-box",
      alignItems: "start", // Ensures each section aligns based on its own content
    }}
  >
    {SectionsAffichage}
  </div>


  );
}*/

// export default function DashboardPage() {
//   const Sections = [
//     {
//       id: 1,
//       title: "A great start",
//       desc: "Hey Hey Hey Hey Hey ",
//       tasks: [{ id: 1, title: "Task 1" }, { id: 2, title: "Task 2" }],
//     },
//     {
//       id: 2,
//       title: "Some struggle",
//       desc: "Wsup pwoqeipqwpoeiqwopiepqw",
//       tasks: [{ id: 3, title: "Task 3" }],
//     },
//     // Add more sections here...
//   ];

//   const SectionsAffichage = Sections.map((section) => (
//     <DSection
//       key={section.id}
//       sectionId={section.id}
//       title={section.title}
//       description={section.desc}
//       tasks={section.tasks}
//     />
//   ));

//   return (
//     <div>
//       <DTopBar sections={Sections} />
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//           gap: "20px",
//           padding: "20px",
//           height: "calc(100vh - 70px)",
//           overflowY: "auto",
//           backgroundColor: "#1A4372",
//           boxSizing: "border-box",
//         }}
//       >
//         {SectionsAffichage}
//       </div>
//     </div>
//   );
// }






// import DSection from "./DSection";
// import DTopBar from "./DTopBar";

/*
export default function DashboardPage() {
    const Sections = [
      { id: 1, title: "A great start", desc: "Hey Hey Hey Hey Hey", tasks: [{ id: 1, title: "Task 1" }] },
      { id: 2, title: "Some struggle", desc: "Wsup pwoqeipqwpoeiqwopiepqw", tasks: [{ id: 2, title: "Task 2" }] },
      { id: 3, title: "Pure hatred", desc: "sdfljskdfjsdjflksdjlkfsdlkfjsdlkfjsdlkfj", tasks: [] },
      { id: 4, title: "Idk why", desc: "sdklfjklsdjfklsdjfsdkflsdjfklsdjflksdjlkfjlsdkjflskdj", tasks: [] },
      { id: 5, title: "did I even try", desc: "vl;xckvl;xckv;lxckvl;xcklvcx", tasks: [] },
      { id: 6, title: "Seems like a good title", desc: "qwpoeiopqweioqpwieopqw", tasks: [] },
    ];
  
    const SectionsAffichage = Sections.map((section) => (
      <DSection
        key={section.id}
        sectionId={section.id}
        title={section.title}
        description={section.desc}
        tasks={section.tasks}
      />
    ));
  
    return (
      <div>
        <DTopBar sections={Sections} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
            padding: "20px",
            minHeight: "100vh",
            overflowY: "auto",
            backgroundColor: "#1A4372",
            boxSizing: "border-box",
          }}
        >
          {SectionsAffichage}
        </div>
      </div>
    );
  }*/
    /*
    export default function DashboardPage() {
        const Sections = [
          { id: 1, title: "A great start", desc: "Hey Hey Hey Hey Hey" },
          { id: 2, title: "Some struggle", desc: "Wsup pwoqeipqwpoeiqwopiepqw" },
          { id: 3, title: "Pure hatred", desc: "sdfljskdfjsdjflksdjlkfsdlkfjsdlkfjsdlkfj" },
          { id: 4, title: "Idk why", desc: "sdklfjklsdjfklsdjfsdkflsdjfklsdjflksdjlkfjlsdkjflskdj" },
          { id: 5, title: "did I even try", desc: "vl;xckvl;xckv;lxckvl;xcklvcx" },
          { id: 6, title: "Seems like a good title", desc: "qwpoeiopqweioqpwieopqw" },
        ];
      
        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
              padding: "20px",
              minHeight: "100vh",
              backgroundColor: "#1A4372",
              boxSizing: "border-box",
            }}
          >
            {Sections.map((section) => (
              <DSection
                key={section.id}
                title={section.title}
                description={section.desc}
              />
            ))}
          </div>
        );
      }
      */

/*
import React from "react";
import DSection from "./DSection";
import DTopBar from "./DTopBar";

export default function DashboardPage() {
  const Sections = [
    { id: 1, title: "A great start", desc: "Hey Hey Hey Hey Hey" },
    { id: 2, title: "Some struggle", desc: "Wsup pwoqeipqwpoeiqwopiepqw" },
    { id: 3, title: "Pure hatred", desc: "sdfljskdfjsdjflksdjlkfsdlkfjsdlkfjsdlkfj" },
    { id: 4, title: "Idk why", desc: "sdklfjklsdjfklsdjfsdkflsdjfklsdjflksdjlkfjlsdkjflskdj" },
    { id: 5, title: "did I even try", desc: "vl;xckvl;xckv;lxckvl;xcklvcx" },
    { id: 6, title: "Seems like a good title", desc: "qwpoeiopqweioqpwieopqw" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      <DTopBar sections={Sections} />

      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          padding: "20px",
          backgroundColor: "#1A4372",
          flexGrow: 1,
          overflowY: "auto", // Ensure scrolling if content overflows
        }}
      >
        {Sections.map((section) => (
          <DSection
            key={section.id}
            title={section.title}
            description={section.desc}
          />
        ))}
      </div>
    </div>
  );
}*/
/*
import React from "react";
import DSection from "./DSection";
import DTopBar from "./DTopBar";

export default function DashboardPage() {
  const Sections = [
    { id: 1, title: "A great start", desc: "Hey Hey Hey Hey Hey" },
    { id: 2, title: "Some struggle", desc: "Wsup pwoqeipqwpoeiqwopiepqw" },
    { id: 3, title: "Pure hatred", desc: "sdfljskdfjsdjflksdjlkfsdlkfjsdlkfjsdlkfj" },
    { id: 4, title: "Idk why", desc: "sdklfjklsdjfklsdjfsdkflsdjfklsdjflksdjlkfjlsdkjflskdj" },
    { id: 5, title: "did I even try", desc: "vl;xckvl;xckv;lxckvl;xcklvcx" },
    { id: 6, title: "Seems like a good title", desc: "qwpoeiopqweioqpwieopqw" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      
      <DTopBar sections={Sections} />

    
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "20px",
          padding: "20px",
          alignItems: "start", // Ensures no height synchronization
          backgroundColor: "#1A4372",
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        {Sections.map((section) => (
          <DSection
            key={section.id}
            title={section.title}
            description={section.desc}
          />
        ))}
      </div>
    </div>
  );
}
*/












/*
import React from "react";
import DSection from "./DSection";
import DTopBar from "./DTopBar";

export default function DashboardPage() {
  const Sections = [
    { id: 1, title: "A great start", desc: "Hey Hey Hey Hey Hey" },
    { id: 2, title: "Some struggle", desc: "Wsup pwoqeipqwpoeiqwopiepqw" },
    { id: 3, title: "Pure hatred", desc: "sdfljskdfjsdjflksdjlkfsdlkfjsdlkfjsdlkfj" },
    { id: 4, title: "Idk why", desc: "sdklfjklsdjfklsdjfsdkflsdjfklsdjflksdjlkfjlsdkjflskdj" },
    { id: 5, title: "did I even try", desc: "vl;xckvl;xckv;lxckvl;xcklvcx" },
    { id: 6, title: "Seems like a good title", desc: "qwpoeiopqweioqpwieopqw" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      <DTopBar sections={Sections} />

     
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Ensures sections stack vertically
          gap: "20px", // Adds spacing between sections
          padding: "20px",
          backgroundColor: "#1A4372",
          flexGrow: 1,
          overflowY: "auto", // Ensures scrolling if needed
        }}
      >
        {Sections.map((section) => (
          <DSection
            key={section.id}
            title={section.title}
            description={section.desc}
          />
        ))}
      </div>
    </div>
  );
}
*/









/*
export default function DashboardPage() {
  const Sections = [
    { id: 1, title: "A great start", desc: "Hey Hey Hey Hey Hey" },
    { id: 2, title: "Some struggle", desc: "Wsup pwoqeipqwpoeiqwopiepqw" },
    { id: 3, title: "Pure hatred", desc: "sdfljskdfjsdjflksdjlkfsdlkfjsdlkfjsdlkfj" },
    { id: 4, title: "Idk why", desc: "sdklfjklsdjfklsdjfsdkflsdjfklsdjflksdjlkfjlsdkjflskdj" },
    { id: 5, title: "did I even try", desc: "vl;xckvl;xckv;lxckvl;xcklvcx" },
    { id: 6, title: "Seems like a good title", desc: "qwpoeiopqweioqpwieopqw" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      <DTopBar sections={Sections} />

     
      <div
        style={{
          display: "flex",
          flexDirection: "inline", // Stack vertically
          gap: "20px", // Space between sections
          padding: "20px",
          backgroundColor: "#1A4372",
          flexGrow: 1,
          overflowY: "auto",
          alignItems: "center", // Center-align sections horizontally
        }}
      >
        {Sections.map((section) => (
          <div
            style={{
              width: "100%",
              maxWidth: "400px", // Set a consistent width for sections
            }}
            key={section.id}
          >
            <DSection title={section.title} description={section.desc} />
          </div>
        ))}
      </div>
    </div>
  );
}*/


// import React from "react";
// import DSection from "./DSection";
// import DTopBar from "./DTopBar";

// export default function DashboardPage() {
//     const [sections, setSections] = React.useState([
//       { id: 1, title: "A great start", desc: "Hey Hey Hey Hey Hey" },
//       { id: 2, title: "Some struggle", desc: "Wsup pwoqeipqwpoeiqwopiepqw" },
//       { id: 3, title: "Pure hatred", desc: "sdfljskdfjsdjflksdjlkfsdlkfjsdlkfjsdlkfj" },
//       { id: 4, title: "Idk why", desc: "sdklfjklsdjfklsdjfsdkflsdjfklsdjflksdjlkfjlsdkjflskdj" },
//       { id: 5, title: "did I even try", desc: "vl;xckvl;xckv;lxckvl;xcklvcx" },
//       { id: 6, title: "Seems like a good title", desc: "qwpoeiopqweioqpwieopqw" },
//     ]);
  
//     const handleDeleteSection = (id) => {
//       setSections(sections.filter((section) => section.id !== id));
//     };
  
//     return (
//       <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//         <DTopBar sections={sections} />
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "inline",
//             gap: "20px",
//             padding: "20px",
//             backgroundColor: "#1A4372",
//             flexGrow: 1,
//             overflowY: "auto",
//             alignItems: "center",
//           }}
//         >
//           {sections.map((section) => (
//             <div
//               style={{
//                 width: "100%",
//                 maxWidth: "400px",
//               }}
//               key={section.id}
//             >
//               <DSection
//                 title={section.title}
//                 description={section.desc}
//                 deleteSection={() => handleDeleteSection(section.id)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  

import React from "react";
import DSection from "./DSection";
import DTopBar from "./DTopBar";

export default function DashboardPage() {
    const [sections, setSections] = React.useState([
      { id: 1, title: "A great start", desc: "Hey Hey Hey Hey Hey" },
      { id: 2, title: "Some struggle", desc: "Wsup pwoqeipqwpoeiqwopiepqw" },
      { id: 3, title: "Pure hatred", desc: "sdfljskdfjsdjflksdjlkfsdlkfjsdlkfjsdlkfj" },
      { id: 4, title: "Idk why", desc: "sdklfjklsdjfklsdjfsdkflsdjfklsdjflksdjlkfjlsdkjflskdj" },
      { id: 5, title: "did I even try", desc: "vl;xckvl;xckv;lxckvl;xcklvcx" },
      { id: 6, title: "Seems like a good title", desc: "qwpoeiopqweioqpwieopqw" },
    ]);
  
    const handleDeleteSection = (id) => {
      setSections(sections.filter((section) => section.id !== id));
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <DTopBar sections={sections} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // Allow sections to wrap to the next row
            gap: "20px",
            padding: "20px",
            backgroundColor: "#1A4372",
            flexGrow: 1,
            overflowY: "auto", // Allow vertical scrolling
            justifyContent: "center", // Center sections
          }}
        >
          {sections.map((section) => (
            <div
              style={{
                flex: "1 1 300px", // Allow sections to shrink, grow, and have a basis of 300px
                maxWidth: "400px", // Limit maximum width of a section
                boxSizing: "border-box",
              }}
              key={section.id}
            >
              <DSection
                title={section.title}
                description={section.desc}
                deleteSection={() => handleDeleteSection(section.id)}
              />
            </div>
          ))}
        </div>
      </div>
    );
}








