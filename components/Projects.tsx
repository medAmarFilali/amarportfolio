import adventure from "../public/images/adv.png";
import abcdzImage from "../public/images/abcdzimage.png";
import oneShop from "../public/images/oneshop.png";
import ProjectElement from "./ProjectElement";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <div id="projects">
      <SectionHeading title="Projects" />
      <div className="flex flex-col gap-4 group/list">
        <ProjectElement
          image={oneShop}
          title="One Shop"
          description="Web Store app that works as an interface for woocommerce and Dokan stores and substores, the app has a cart feature, follow store feature linked to the Dokan Pro feature and also a payment feature, I also made a dedicated plugin in wordpress to fetch the data and handle authentication."
          link="#"
          tags={["React Native", "Expo", "Wordpress", "Woocommerce"]}
        />

        <ProjectElement
          image={adventure}
          title="WIGO OUTDOORS"
          description="Mobile app that helps adventures looks for their next adventure, Geo
            location, nearest adventures, adventures types (Camping, hiking,
            biking...etc), Coachs Mobile app included with payment management
            and google maps integration"
          link="#"
          tags={["React Native", "Redux", "Expo", "Supabase", "PostGIS"]}
        />
        <ProjectElement
          image={abcdzImage}
          title="e-ABCDZ"
          description="Educational mobile app for french lessons, The app includes course subscriptions, Live courses, video courses and quizzes with an React admin web app to manage users, payments and subscriptions."
          link="#"
          tags={[
            "React Native",
            "React",
            "Expo",
            "NodeJS",
            "Stripe",
            "Google API",
          ]}
        />
      </div>
    </div>
  );
}
