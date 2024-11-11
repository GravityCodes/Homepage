import "./style/reset.css";
import "./style/style.css";


const $workSection = document.querySelector("#my-work-section");
const $projectContainers = document.querySelectorAll(".project-container");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: .1,
};

const toggleFadeAnim = (entries) => {
    console.log(entries[0]);

    if(entries[0].isIntersecting == true) {
        $projectContainers.forEach((projectContainer) => {
            projectContainer.classList.remove("fall-out-place");
            projectContainer.classList.add("fall-in-place");
            
        });
    } else {
        $projectContainers.forEach(projectContainer => {
            projectContainer.classList.remove("fall-in-place");
            projectContainer.classList.add("fall-out-place");
            
        });
    }

    
 
}

const observer = new IntersectionObserver(toggleFadeAnim, options);

observer.observe($workSection);