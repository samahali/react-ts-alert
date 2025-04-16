import Alert from "./components/Alert";
import Footer from "./components/layout/Footer";
import { ComponentDetails } from "./types";
import {Fragment} from "react";
import { AlertTriangle, Ban, CheckCheck, Info } from "lucide-react";

function App() {
  const iconSize = 20;
  const componentDetails: ComponentDetails = [
    {
      type: "alert-info",
      icon: <Info size={iconSize} />,
      title: "Info",
      description: (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium 
          laboriosam iste totam officiis beatae sint non quas.
        </p>
      ),
    },
    {
      type: "alert-warning",
      icon: <AlertTriangle size={iconSize} />,
      title: "warning",
      description: (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium 
          laboriosam iste totam officiis beatae sint non quas.
        </p>
      ),
    },
    {
      type: "alert-danger",
      icon: <Ban size={iconSize} />,
      title: "Something went wrong",
      description:`
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium 
          laboriosam iste totam officiis beatae sint non quas.
        `,
    },
    {
      type: "alert-success",
      icon: <CheckCheck size={iconSize} />,
      title: "Success",
      description: (
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
          laboriosam iste totam officiis beatae sint non quas.
          <a href='#'>new</a>
        </div>
      ),
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <main style={{ margin: "2rem", flex: 1 }}>
        {componentDetails.map((elem, index) => (
          <Alert
            key={index}
            type={elem.type}
            icon={elem.icon}
            title={elem.title}
            description={elem.description}
          />
        ))}
      </main>
      <Footer />
    </div>

  );
}

export default App;
