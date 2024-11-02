import { useState } from 'react';
import './Publications.css'
import {FaArrowDown, FaArrowUp, FaBalanceScaleLeft, FaBuilding, FaChartLine, FaFileAlt, FaGlobeAmericas, FaLandmark, FaLaptopCode, FaLaravel, FaMagnet, FaMicroscope, FaSpaceShuttle } from 'react-icons/fa';

//potential subjects= envsci, astro, physics, econ, compsci, polisci, bio, math

const Publications = () => {
  const [publications, setPublications] = useState(
    [
      {
        title:"Design and Development of Weather Forecasting Software For Agriculture", 
        author: "Vu Ngoc Kien, Tran Ngoc Nhat Minh",
        link: "https://www.jetir.org/view?paper=JETIR2410146",
        subject: "compsci",
        abstract: "Smart weather forecasting technology plays a pivotal role in agricultural production. We have developed a weather application based on The Deep Hybrid Model to measure wind speed, pressure, temperature, and rainfall. Additionally, the application is designed to obtain the user's current location through location listening and send this information to an API, where it is then arranged into an array list. The synchronization task is a method used to access data whenever needed, and this task runs continuously in the background. The weather API is used to retrieve the current temperature of popular areas within a 150 km radius, and then the data is stored in an array list. From these array lists, data is assigned by a temporary variable to retrieve information about wind speed, pressure, temperature, and rainfall."
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
        link: "",
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
    console.log(e.target.value); 
  }

  const handleFilterReset = () => {
    setPubFilter('');
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
        <h1 className='text-center sm:text-2xl md:text-3xl lg:text-4xl m-5'><span className="font-semibold">Published Papers</span></h1>

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
                        <option value='' selected disabled hidden>Choose Filter</option>
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
                    <div className='col-start-3'>
                      <div className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 text-center cursor-pointer" onClick={handleFilterReset}>Reset</div>
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
          <p className="text-gray-500 text-md">ARTICLES: </p>
          
          <h2 className="font-bold text-2xl hover:underline">
            <a href={link} target="_blank" rel="noopener noreferrer">
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