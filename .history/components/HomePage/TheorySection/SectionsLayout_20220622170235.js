import Sections from "./Section";
import dcf_model from "../../../image/dcf_model.png";
import capm_model from "../../../image/capm_model.png";
import technical_model from "../../../image/technical_model.png";

const SectionsLayout = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-6 " style={{marginTop:60, marginLeft: 140, marginBottom:200}}>
      <div>
        <Sections
          img_source={dcf_model}
          section_name="DCF Model"
          section_description="Accounting, Valuation, Excel"
          section_difficulty="Difficulty:  ⭐⭐️⭐️️"
        />
      </div>

      <div>
        <Sections
          img_source={capm_model}
          section_name="CAPM Model"
          section_description="Risk, Portfolio Management"
          section_difficulty="Difficulty:  ⭐⭐️⭐️️⭐️️"
        />
      </div>

      <div>
        <Sections
          img_source={technical_model}
          section_name="Technical Models"
          section_description="Statistics, Trading, Technical"
          section_difficulty="Difficulty:  ⭐⭐️⭐️️⭐️️"
        />
      </div>
    </div>
  );
};

export default SectionsLayout;
