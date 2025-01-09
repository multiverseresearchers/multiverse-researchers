import { useState } from 'react';
import './Publications.css'
import {FaArrowDown, FaArrowUp, FaBalanceScaleLeft, FaChartLine,
    FaFileAlt, FaGlobeAmericas, FaLandmark, FaLaptopCode, FaLaravel, FaMicroscope, FaSpaceShuttle } from 'react-icons/fa';

//potential subjects= envsci, astro, physics, econ, compsci, polisci, bio, math

const Publications = () => {
  const [publications] = useState(
    [
      {
        title:"Design and Development of Weather Forecasting Software For Agriculture", 
        author: "Vu Ngoc Kien, Tran Ngoc Nhat Minh",
        link: "https://www.jetir.org/view?paper=JETIR2410146",
        subject: "compsci",
        abstract: "Smart weather forecasting technology plays a pivotal role in agricultural production. We have developed a weather application based on The Deep Hybrid Model to measure wind speed, pressure, temperature, and rainfall. Additionally, the application is designed to obtain the user's current location through location listening and send this information to an API, where it is then arranged into an array list. The synchronization task is a method used to access data whenever needed, and this task runs continuously in the background. The weather API is used to retrieve the current temperature of popular areas within a 150 km radius, and then the data is stored in an array list. From these array lists, data is assigned by a temporary variable to retrieve information about wind speed, pressure, temperature, and rainfall."
      },
      {
        title:"Ammmogas Breathalyzer: An Arduino-Based Break Analyzer for Risk Assessment and Monitoring of Hyperammonemia", 
        author: "Andre Jerahmy R. Amante, John Carlo I. Benter, Raeburn M. Cataquis",
        link: "https://drive.google.com/file/d/1e_WqnxAbeu2XbdmSakThBpDhCfcQ0X99/view",
        subject: "compsci",
        abstract: "Ammonia is a naturally produced compound that is harmful in excessive amounts. It causes brain-related complications, making it essential to keep it in low concentrations. The urea cycle is a process involving the release of ammonia. It may be excreted in the form of urine. Hyperammonemia is the condition in which this process fails to function properly, increasing blood ammonia levels. No specific approach is present in engaging in hyperammonemia due to the variety of possible causes. Only after finding out the underlying cause of hyperammonemia, then proper treatment may be implemented. The AmmoGas Breathalyzer is a developmental study that uses Arduino and an MQ-137 gas sensor to detect concentrations of ammonia in human breath for risk assessment and monitoring of hyperammonemia. The process of accuracy testing of the device would be comparing the breathalyzer to a desired target of concentration of ammonia. The acquired results are subjected to an independent two-tailed t-test and percentage error to compare their results. The AmmoGas showed potential as it showed no significant differences in its readings compared to the desired readings of the device. It can be inferred that the AmmoGas Breathalyzer can be a reliable device for detecting concentrations of ammonia."
      },
      {
        title:"Lithium Mining Soft AUVs: A Soft Robotics Approach for Minimal Ecological Impact and Enhanced Efficiency", 
        author: "Sophia Havrylyak",
        link: "https://docs.google.com/document/d/19D4FBzaS4Ds9L9vew2hbg7ewI2LhC75C652kh-mxfm0/edit?tab=t.0#heading=h.dnfmqvofrkwq",
        subject: "envsci",
        abstract: "With growing freshwater scarcity and surging demand for critical minerals like lithium, the pace of innovation will have to rise to meet the dual crises facing humanity. This project proposes an affordable, scalable device that integrates lithium extraction with seawater desalination--a way to make the world's vast oceans a dual resource for both clean water and sustainable energy. It uses state-of-the-art adsorption materials, effective pumping systems, and renewable energy to selectively extract lithium-a cornerstone of modern battery technology--from seawater while supporting the desalination process in tandem. Drawing from an already established network of desalination infrastructure, this system is low-cost and modular, bringing an entirely new synergy to the coastal community, especially within water-stressed regions. Conceptually envisioned as both a proof-of-concept and one toward environmental harmony, this solution aims to reduce the mineral load in seawater before desalination. This will help in making the process of desalination more efficient and sustainable. It aspires to empower regions where water scarcity and renewable energy demand converge, offering a pathway to a future where freshwater flows freely, and clean energy powers the world. We will make it our undertaking to redefine the boundaries of possibility with ocean resources: solving scarcity, promoting sustainability, and inspiring the next wave of innovation."
      },
      {
        title:"MUSA TEXTILIS, PHYLLOSTACHYS, AND PILI FIBERS, AND ASEPTIC PACKAGES AS ALTERNATIVE REINFORCEMENT FIBERS IN MAKING FIBER-REINFORCED POLYMER", 
        author: "John Carlo I. Benter",
        link: "https://drive.google.com/file/d/1aKv27zWmWezBNLsqyiZvRNBMFm74FjdA/view",
        subject: "bio",
        abstract: "A fiber-reinforced polymer (FRP) is a composite material made of a polymer matrix reinforced with fibers. The fibers are usually glass, carbon, aramid, or basalt. Rarely, other fibers such as paper or wood have been used. The polymer is usually an epoxy, vinylester or polyester thermosetting plastic, and phenol formaldehyde resins. Fiberglass is an example of a composite. It is a fiber-reinforced polymer with glass fiber as reinforcement. It is immensely versatile due to its light weight, inherent strength, weather resistance and variety of surface texture. Some of the many uses of fiberglass today include boat and ship hull, helmet and other protective gears, and water slides. Fiberglass has become a popular alternative given its proven durability. Musa textilis (abaca) abounds in the province of Oriental Mindoro, particularly in the municipality of San Teodoro. Phyllostachys (bamboo) thrives anywhere and is already popularly utilized in various ways. Pili (human hair fiber) is considered a waste that does not decompose by proteolysis. Aseptic packages (commercially known as tetra pack) accumulates from day-to- day human consumption which post threat to the environment if not managed accordingly. The abundance of abaca and bamboo, plus the presence of potential environment hazards like human hair fibers and aseptic packages urged the researchers to find their alternative utility such as reinforcement fiber in making FRP. The researchers, with the assistance of professional fiberglass makers tried using abaca fibers, human hair fibers, fibered bamboo and shredded aseptic packages mixed with resin in making specimen fiber glass. The four specimens underwent the normal drying process. The outputs were compared with the fiberglass prepared with standard glass fibers in terms of strength, weight, and water absorption deficiency. Findings show that all specimen are at par with the standard FRP. The study also shows that the use of natural fibers minimizes energy requirement and chemical content of the FRP. It also promotes environmental conservation by converting wastes like human hair fibers and aseptic packages into other utility. Finally, the study can help increase the income of FRP makers with the use of cheaper or costless alternative reinforcement fibers."
      },
      {
        title: "Nuclear Fusion: A Future Technology?",
        author: "Zaara Shaheer Khan",
        link: "https://drive.google.com/file/d/1YNY9gN42MycWyC9wl3GmurPLQIuwzH8b/view",
        subject: "physics",
        abstract: "This investigatory project aims to explore the current image of nuclear fusion, understand the reasons behind its ongoing elusiveness, and propose potential strategies for accelerating its integration into the energy landscape. By examining these factors, we hope to provide insights into how fusion technology might overcome its current obstacles and eventually become a viable and transformative energy source."
      },
      {
        title: "The Effect of pH on the Growth of E. Coli",
        author: "Kayla Cusumano, Tracy Jiang, Gyuree Kim",
        link: "",
        subject: "bio",
        abstract: "Although research on E. coli has been conducted for decades, this bacteria remains responsible for over a million deaths annually. As the global incidence of E. coli infections is increasing, more effective prevention methods are rising in demand. pH is a critical factor due to its direct impact on the metabolic activities of bacteria. This study found the optimal environmental pH that developed the least colonies. It was predicted that E. coli would display more growth in dishes with lower pH level solutions. To test this, E. coli was grown in petri dishes with olive solutions of varying pH levels (6.5, 7, and 7.5). The number of colonies in individual plates was counted after incubation, concluding that bacteria growth at a pH of 6.5 was the greatest, followed by 7.5 and lastly 7. P-values were greater than 0.05, rejecting the initial hypothesis. These findings can contribute to designing sanitary factors with suitable pH conditions to prevent the growth of bacteria and lessen the spread of illnesses that follow. Future studies will be conducted on the effect of pH on other types of bacteria and finding the preventative method for infections utilizing our findings. "
      },
      {
        title: "An Innovative Way to Mitigate the Sign Problem in Quantum Monte Carlo Simulations",
        author: "Anand Ajith",
        link: "https://drive.google.com/file/d/1NjpfHpaOoNJPyfDMFkkmPJ4wUddlx7aE/view",
        subject: "compsci",
        abstract: "The existence of the sign problem severely affects the efficiency of quantum Monte Carlo simulations designed to simulate many-body quantum systems. I explore the significance of this through a detailed analysis of the decomposed partition function. I use adjacency matrices and geometric phases of closed walks which represent Hamiltonian systems to demonstrate how the sign of associated weights influence the overall function’s positivity. I propose the use of unitary transformations to mitigate the sign problem. I use the geometric representation to create a cost function that measures the weights of fundamental cycles to determine the significance of the sign problem, after applications of unitaries. Using gradient-descent optimization, I propose a superior algorithm that seeks to optimize the cost function and generate a unitary which mitigates the sign problem."
      },
      {
        title: "AI Impact on Drug Discovery and Protein Structure Prediction",
        author: "Elmubarak Malik Elmubarak Mohamed Alamin, Kamran Azim Sheikh, Al Ain Juniours",
        link: "https://drive.google.com/file/d/1WLJGW8SeDGNtH4MCz4cjluwNJFFeZATI/view?usp=sharing",
        subject: "compsci",
        abstract: "The drug discovery process is notoriously lengthy and expensive, often requiring up to a decade and costing pharmaceutical companies an average of $2.6 billion. This paper explores the impact of artificial intelligence (AI) on accelerating the research and development (R&D) cycle in drug discovery, highlighting case studies and the application of AI in target identification, lead optimization, and clinical trials. Additionally, it examines the potential of TNIK as a therapeutic target for various aging-related diseases and discusses the advancements in protein structure prediction technologies."
      },
      {
        title: "In-depth relationship between air pollutants and Coronary Artery Disease in South Asia: A Review",
        author: "Sharath Jyothi, Shashwat Mishra",
        subject: "envsci",
        link: "https://www.researchgate.net/publication/383213319_In-depth_relationship_between_air_pollutants_and_Coronary_Artery_Disease_in_South_Asia_A_Review",
        abstract: "Coronary artery disease (CAD) is a potentially fatal cardiovascular condition characterized bythe obstruction of plaque, disrupting appropriate blood flow to the heart. While the buildup of cholesterol deposits is a common cause of CAD, new research by Roopesh Singh Gangwar[1]has shown that reactive oxygen species (ROS) created from exposure to Particulate Matter 2.5(PM 2.5) can also contribute to the disease. In South Asia, air pollutants such as PM2.5 and methane combustion are at extreme levels and have been firmly associated with the development of cardiovascular disease. Specifically, Pakistan's most common heart disease isCAD, and cardiovascular disease is the leading cause of death[2]. The country has experienced pollutant levels above 35 μg/m³, which are considered detrimental to human health. Although The negative impacts of PM2.5 are not completely understood scientifically, recent studies byPrakash Thangavel[3] have pointed to connections with ROS. This paper will discuss the correlation between elevated PM2.5 and ROS levels and the increased rates of cardiovascular disease in the most affected provinces of South Asia, as well as the impact of other industrial pollutants such as volatile organic compounds (VOCs) and methane."
      },
      {
        title: "The Development of Gene Editing Tools on the Animal Model= Zebrafish as a model",
        author: "Alyssa Gin",
        subject: "bio",
        link: "https://drive.google.com/file/d/1xllbHuzmVfmH_hUZQ-C48lW95gRUqDad/view?usp=sharing",
        abstract: "With gene editing techniques becoming more popular in fields such as bioengineering and medicine, it has become a rapidly developing field. The most popular techniques include the zinc finger nucleases (ZFNS), transcription activator-like effector nucleases (TALEN) and CRISPR/Cas-9. Despite their advancement, many of the techniques still remain to be unpredictable and prone to impact surrounding DNA. Consequently, it remains imperative that researchers and scientists continue to develop and improve it to a greater precision. However, gene editing still remains to be a controversial field, especially on human testing. Consequently, many research scientists and medical clinicians have resorted to using animal models as a form of testing. With its many advantages and ethical approval from many boards around the world, it has become a vital aspect of many research studies in studying biological processes and diseases. In recent years, the zebrafish has become the golden pick with its unique traits of strong genetic diversity, transparent embryos, and high reproductive rate. Through employing data and published scientific research, we were able to conclude that the field has greatly advanced in the last centuries with scientific leaders such as Jennifer Doudna and Emmanuelle Charpentier who won the 2020 Nobel Prize in Chemistry for the development of the CRISPR tool. (Westermann, par.1) Despite, the field still requiring development and further advancement, it is hopeful that gene editing techniques can be employed on human models safely."
      },
      {
        title:"The Growing STEM Crisis and its Eminent Threat to the Superpower Status of the United States", 
        author: "Anshuman Roy",
        link: "https://drive.google.com/file/d/1fojT-yeHbt7iUpJUe-_68vjuQ_n5G_h1/view",
        subject: "bio",
        abstract: "The STEM(Science, Technology, Math, and Engineering) crisis is an event that is currently happening within the United States of America, in which there are an inadequate number of STEM jobs being filled. More prepared, and STEM-oriented countries are taking over important roles in technology and other sciences. In this review, we will dive deep into the STEM Crisis, and assess the causes, impacts, and plausible solutions there are towards this issue."
      },
      {
        title:"How is Virtual Reality (VR) Changing the Way We Interact with the World", 
        author: "Thanissa Ganason",
        link: "https://premierscience.com/wp-content/uploads/2024/12/pjs-24-463.pdf",
        subject: "compsci",
        abstract: "Virtual reality (VR) is revolutionizing the way we interact with the world. VR is a simulated three-dimensional (3D) environment and a simulated experience that allows the user to explore and interact with the virtual environment to approximate reality and give the user the feeling of being immersed in a virtual world. It has gained amazing growth and popularity in transforming industries, such as entertainment, education, and others. Back then, learning was limited to textbooks and lectures. Complex topics were explained through static images and text. In addition, films were shown on flat screens. Interaction with video games was possible but was limited by the screen and remote controls. Nowadays, however, VR enables immersive excursions and 3D simulations for learning. This perspective begins by discussing how VR is changing the way we interact with the world."
      }
    ]
  );

  const [pubFilter, setPubFilter] = useState("");
  const [sortBy, setSortBy] = useState("")

  const shouldFilterField = (pub:any) => {
    if (pubFilter.length > 0) {
      return pub["subject"] == pubFilter;
    } else {
      return true;
    }
  }

  const handleSortPubs = (values:any, sortByValue:string) => {
    return values.sort((a:any, b:any) => {
        switch(sortByValue) {
            case 'title_asc' : return a["title"].localeCompare(b["title"]);
            case 'title_desc' : return -(a["title"].localeCompare(b["title"]));
            case 'author_asc' : return a["author"].localeCompare(b["author"]);
            case 'author_desc' : return -(a["author"].localeCompare(b["author"]));
            default : return 0;
        }
    })
  }

  let title_sort_toggle = ["", "title_asc", "title_desc"];
  let author_sort_toggle = ["", "author_asc", "author_desc"];

  const handleFilterPubs = (filterResults:any) => {
    return filterResults.filter((pub:any) => (shouldFilterField(pub)));
  }

  const filteredAndSortedPublications = (
    handleSortPubs(handleFilterPubs(publications), sortBy)
  );

  const onFilterDropdownChange = (e:any) => {
    setPubFilter(e.target.value)
  }

  const onTitleSortClick = () => {
    setSortBy(title_sort_toggle[(title_sort_toggle.indexOf(sortBy) + 1) % title_sort_toggle.length]);
  }

  const onAuthorSortClick = () => {
    setSortBy(author_sort_toggle[(author_sort_toggle.indexOf(sortBy) + 1) % author_sort_toggle.length]);
  }

  const renderAuthorSortArrow = () => {
    if (sortBy == "author_asc") {
      return [
        (<div className='font-bold text-green-500'> - Author </div>),
        (<div className='text-green-500'> <FaArrowUp /> </div>)
      ];
    } else if (sortBy == "author_desc") {
      return [
        (<div className='font-bold text-red-500'> - Author </div>),
        (<div className='text-red-500'> <FaArrowDown /> </div>)
      ];
    } else {
      return [
        (<div> - Author </div>),
        (<div> </div>)
      ];
    }
  }

  const renderTitleSortArrow = () => {
    if (sortBy == "title_asc") {
      return [
        (<div className='font-bold text-green-500'> - Title </div>),
        (<div className='text-green-500'> <FaArrowUp /> </div>)
      ];
    } else if (sortBy == "title_desc") {
      return [
        (<div className='font-bold text-red-500'> - Title </div>),
        (<div className='text-red-500'> <FaArrowDown /> </div>)
      ];
    } else {
      return [
        (<div> - Title </div>),
        (<div> </div>)
      ];
    }
  }

  return (
    <div>
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-center sm:text-2xl md:text-3xl lg:text-4xl m-5'><span className="font-semibold">Paper Spotlight</span></h1>

          <div className="flex grid divide-x-2 divide-gray-700 grid-cols-5">

            <div className="flex grid grid-cols-1 divide-y-2 divide-gray-500 divide-dashed col-start-1 col-span-4">
              {
                filteredAndSortedPublications.map((pub:any, index:number) => {
                  return (
                    <PublicationBlock 
                      title={pub.title}
                      author={pub.author}
                      subject={pub.subject}
                      link={pub.link}
                      abstract={pub.abstract}
                      key={index}
                    />
                  );
                })
              }
            </div>

            
            <div className="col-start-5">
              {/* sort by title and author (asc and desc), filter by field*/}
              {/* potential subjects = envsci, astro, physics, econ, compsci, polisci, bio, math */}
              <div className="flex grid grid-cols-1 gap-6 p-6">
                <div className='text-center'>
                  <h2 className="text-gray-500 text-2xl mb-4">FILTER/SORT</h2>
                </div>

                <div>
                  <h2 className="text-xl mb-4">Filter By:</h2>
                  <div className="dropdown flex grid grid-cols-3 gap-6">
                    <div>
                      <select value={pubFilter} className="col-start-1 col-span-2 border-2 rounded-lg h-full hover:border-gray-500" onChange={onFilterDropdownChange}>
                        <option value='' selected>None</option>
                        <option value="envsci">Environmental Science</option>
                        <option value="astro">Astronomy</option>
                        <option value="physics">Physics</option>
                        <option value="econ">Economics</option>
                        <option value="compsci">Computer Science</option>
                        <option value="polisci">Political Science</option>
                        <option value="bio">Biology</option>
                        <option value="math">Math</option>
                      </select>
                    </div>

                  </div>
                </div>

                <div>
                  <h2 className="text-xl mb-4">Sort By:</h2>
                  <div className="flex flex-col text-lg">
                    <div className='flex flex-row py-2' onClick={onAuthorSortClick}>
                      <div className='hover:font-underline cursor-pointer'>
                        {renderAuthorSortArrow()[0]}
                      </div>
                      <div className='px-2 justify-center mt-1'>
                        {renderAuthorSortArrow()[1]}
                      </div>
                    </div>

                    <div className='flex flex-row py-2' onClick={onTitleSortClick}>
                      <div className='hover:font-underline cursor-pointer'>
                        {renderTitleSortArrow()[0]}
                      </div>
                      <div className='px-2 justify-center mt-1'>
                        {renderTitleSortArrow()[1]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}

const PublicationBlock = ({title, author, link, abstract, subject}:
                       {title:string, author:string, link:string, abstract:string, subject:string}) => {


  let subjectIcon;
  
  switch (subject) {
    case "envsci":
      subjectIcon = (
        < FaGlobeAmericas className="text-9xl ml-auto mb-4 text-green-700" />
      );
      break;
    case "astro":
      subjectIcon = (
        <FaSpaceShuttle className="text-9xl ml-auto mb-4 text-red-600" />
      );
      break;
    case "physics":
      subjectIcon = (
        <FaBalanceScaleLeft className="text-9xl ml-auto mb-4 text-orange-500" />
      ); 
      break;
    case "econ":
      subjectIcon = (
        <FaChartLine className="text-9xl ml-auto mb-4 text-lime-300" />
      );
      break;
    case "compsci":
      subjectIcon = (
        <FaLaptopCode className="text-9xl ml-auto mb-4 text-sky-500" />
      );
      break;
    case "polisci":
      subjectIcon = (
        <FaLandmark className="text-9xl ml-auto mb-4 text-violet-600" />
      );
      break;
    case "bio":
      subjectIcon = (
        <FaMicroscope className="text-9xl ml-auto mb-4 text-rose-500" />
      );
      break;
    case "math":
      subjectIcon = (
        <FaLaravel className="text-9xl ml-auto mb-4 text-amber-400" />
      );
      break;
    default:
      subjectIcon = (
        <FaFileAlt className="text-9xl ml-auto mb-4" />
      );

  }

  return (
    <div className="bg-white p-8 m-0 w-full flex flex-col grid grid-cols-5 gap-6 justify-between">
      <div className='place-items-center place-content-center'>
          <div>
            {subjectIcon}
          </div>
      </div>
      <div className='col-start-2 col-span-4'>            
        <div className='row-start-1 row-span-2 h-auto md:h-50'>
          {/* <p className="text-gray-500 text-md">ARTICLES: </p> */}
          
          <h2 className={(link == "") ? "font-bold text-2xl" : "font-bold text-2xl hover:underline"}>
            <a href={link} target={(link == "") ? "" : "_blank"} rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          <p className="text-md mt-2 mb-6 italic">{author}</p>
          <p>{abstract}</p>
        </div>
      </div>
    </div>
  );
}

export default Publications