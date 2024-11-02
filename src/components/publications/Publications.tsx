import './Publications.css'
import { FaUserGraduate, FaQuestionCircle, FaBookReader, FaSearchengin, FaPaperPlane, FaPollH } from 'react-icons/fa';

//potential subjects= envsci, astro, physics, econ, compsci, polisci, bio, math

const Publications = () => {

  return (
    <div>
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-center sm:text-2xl md:text-3xl lg:text-4xl m-5'><span className="font-semibold">Published Papers</span></h1>

          <div className="flex grid grid-cols-5">

            <div className="flex grid grid-cols-1 divide-y-2 divide-gray-500 divide-dashed col-start-1 col-end-4">
              <PublicationBlock 
                  title= "Design and Development of Weather Forecasting Software For Agriculture" 
                  author= "Vu Ngoc Kien, Tran Ngoc Nhat Minh"
                  link= "https://www.jetir.org/view?paper=JETIR2410146"
                  abstract= "Smart weather forecasting technology plays a pivotal role in agricultural production. We have developed a weather application based on The Deep Hybrid Model to measure wind speed, pressure, temperature, and rainfall. Additionally, the application is designed to obtain the user's current location through location listening and send this information to an API, where it is then arranged into an array list. The synchronization task is a method used to access data whenever needed, and this task runs continuously in the background. The weather API is used to retrieve the current temperature of popular areas within a 150 km radius, and then the data is stored in an array list. From these array lists, data is assigned by a temporary variable to retrieve information about wind speed, pressure, temperature, and rainfall."
                  subject="compsci"
                />

              <PublicationBlock 
                  title= "Nuclear Fusion= A Future Technology?" 
                  author= "Zaara Shaheer Khan"
                  link= "https://drive.google.com/file/d/1YNY9gN42MycWyC9wl3GmurPLQIuwzH8b/view"
                  abstract= "This investigatory project aims to explore the current image of nuclear fusion, understand the reasons behind its ongoing elusiveness, and propose potential strategies for accelerating its integration into the energy landscape. By examining these factors, we hope to provide insights into how fusion technology might overcome its current obstacles and eventually become a viable and transformative energy source."
                  subject= "physics"
              />

              <PublicationBlock 
                  title= "The Effect of pH on the Growth of E. Coli" 
                  author= "Kayla Cusumano, Tracy Jiang, Gyuree Kim"
                  link= ""
                  abstract= "Although research on E. coli has been conducted for decades, this bacteria remains responsible for over a million deaths annually. As the global incidence of E. coli infections is increasing, more effective prevention methods are rising in demand. pH is a critical factor due to its direct impact on the metabolic activities of bacteria. This study found the optimal environmental pH that developed the least colonies. It was predicted that E. coli would display more growth in dishes with lower pH level solutions. To test this, E. coli was grown in petri dishes with olive solutions of varying pH levels (6.5, 7, and 7.5). The number of colonies in individual plates was counted after incubation, concluding that bacteria growth at a pH of 6.5 was the greatest, followed by 7.5 and lastly 7. P-values were greater than 0.05, rejecting the initial hypothesis. These findings can contribute to designing sanitary factors with suitable pH conditions to prevent the growth of bacteria and lessen the spread of illnesses that follow. Future studies will be conducted on the effect of pH on other types of bacteria and finding the preventative method for infections utilizing our findings. "
                  subject= "bio"
              />

              <PublicationBlock 
                  title= "An Innovative Way to Mitigate the Sign Problem in Quantum Monte Carlo Simulations" 
                  author= "Anand Ajith"
                  link= ""
                  abstract= "The existence of the sign problem severely affects the efficiency of quantum Monte Carlo simulations designed to simulate many-body quantum systems. I explore the significance of this through a detailed analysis of the decomposed partition function. I use adjacency matrices and geometric phases of closed walks which represent Hamiltonian systems to demonstrate how the sign of associated weights influence the overall function’s positivity. I propose the use of unitary transformations to mitigate the sign problem. I use the geometric representation to create a cost function that measures the weights of fundamental cycles to determine the significance of the sign problem, after applications of unitaries. Using gradient-descent optimization, I propose a superior algorithm that seeks to optimize the cost function and generate a unitary which mitigates the sign problem."
                  subject= "compsci"
              />

              <PublicationBlock 
                  title= "AI Impact on Drug Discovery and Protein Structure Prediction" 
                  author= "Elmubarak Malik Elmubarak Mohamed Alamin, Kamran Azim Sheikh, Al Ain Juniours"
                  link= "https://drive.google.com/file/d/1WLJGW8SeDGNtH4MCz4cjluwNJFFeZATI/view?usp=sharing"
                  abstract= "The drug discovery process is notoriously lengthy and expensive, often requiring up to a decade and costing pharmaceutical companies an average of $2.6 billion. This paper explores the impact of artificial intelligence (AI) on accelerating the research and development (R&D) cycle in drug discovery, highlighting case studies and the application of AI in target identification, lead optimization, and clinical trials. Additionally, it examines the potential of TNIK as a therapeutic target for various aging-related diseases and discusses the advancements in protein structure prediction technologies."
                  subject= "compsci"
              />

              <PublicationBlock 
                  title= "In-depth relationship between air pollutants and Coronary Artery Disease in South Asia= A Review" 
                  author= "Sharath Jyothi, Shashwat Mishra"
                  link= "https://www.researchgate.net/publication/383213319_In-depth_relationship_between_air_pollutants_and_Coronary_Artery_Disease_in_South_Asia_A_Review"
                  abstract= "Coronary artery disease (CAD) is a potentially fatal cardiovascular condition characterized bythe obstruction of plaque, disrupting appropriate blood flow to the heart. While the buildup of cholesterol deposits is a common cause of CAD, new research by Roopesh Singh Gangwar[1]has shown that reactive oxygen species (ROS) created from exposure to Particulate Matter 2.5(PM 2.5) can also contribute to the disease. In South Asia, air pollutants such as PM2.5 and methane combustion are at extreme levels and have been firmly associated with the development of cardiovascular disease. Specifically, Pakistan's most common heart disease isCAD, and cardiovascular disease is the leading cause of death[2]. The country has experienced pollutant levels above 35 μg/m³, which are considered detrimental to human health. Although The negative impacts of PM2.5 are not completely understood scientifically, recent studies byPrakash Thangavel[3] have pointed to connections with ROS. This paper will discuss the correlation between elevated PM2.5 and ROS levels and the increased rates of cardiovascular disease in the most affected provinces of South Asia, as well as the impact of other industrial pollutants such as volatile organic compounds (VOCs) and methane."
                  subject= "envsci"
              />


              <PublicationBlock 
                  title= "The Development of Gene Editing Tools on the Animal Model= Zebrafish as a model"
                  author= "Alyssa Gin"
                  link= "https://drive.google.com/file/d/1xllbHuzmVfmH_hUZQ-C48lW95gRUqDad/view?usp=sharing"
                  abstract= "With gene editing techniques becoming more popular in fields such as bioengineering and medicine, it has become a rapidly developing field. The most popular techniques include the zinc finger nucleases (ZFNS), transcription activator-like effector nucleases (TALEN) and CRISPR/Cas-9. Despite their advancement, many of the techniques still remain to be unpredictable and prone to impact surrounding DNA. Consequently, it remains imperative that researchers and scientists continue to develop and improve it to a greater precision. However, gene editing still remains to be a controversial field, especially on human testing. Consequently, many research scientists and medical clinicians have resorted to using animal models as a form of testing. With its many advantages and ethical approval from many boards around the world, it has become a vital aspect of many research studies in studying biological processes and diseases. In recent years, the zebrafish has become the golden pick with its unique traits of strong genetic diversity, transparent embryos, and high reproductive rate. Through employing data and published scientific research, we were able to conclude that the field has greatly advanced in the last centuries with scientific leaders such as Jennifer Doudna and Emmanuelle Charpentier who won the 2020 Nobel Prize in Chemistry for the development of the CRISPR tool. (Westermann, par.1) Despite, the field still requiring development and further advancement, it is hopeful that gene editing techniques can be employed on human models safely."
                  subject= "bio"
              />
            </div>

            
            <div id="fadeshow1" className="col-start-5">
              
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

      break;
    case "astro":

      break;
    case "physics":

      break;
    case "econ":

      break;
    case "compsci":

      break;
    case "polisci":

      break;
    case "bio":

      break;
    case "math":
      
      break;
  }

  return (
    <div className="bg-white shadow-lg p-8 m-0 w-full flex flex-col grid grid-cols-1 gap-6 justify-between">
      <div className='row-start-1 row-span-2 h-auto md:h-50'>
        <p className="text-gray-500 text-sm">ARTICLES</p>
        
        <h2 className="font-bold text-2xl mb-4">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>

      </div>
      <div className='row-start-4'>
        <p className="text-lg ml-1 pt-3 pb-3">{author}</p>

        <div className="flex grid grid-cols-2">
          <div>
            {subjectIcon}
          </div>
          <div>
            <p>{abstract}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publications