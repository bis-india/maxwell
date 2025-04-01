let checkButtonClicked = false;

const jsonData = [
{"type":"aso","temp":"10","multiplier":"1.0409"},{"type":"aso","temp":"10.5","multiplier":"1.0388"},{"type":"aso","temp":"11","multiplier":"1.0367"},{"type":"aso","temp":"11.5","multiplier":"1.0346"},{"type":"aso","temp":"12","multiplier":"1.0325"},{"type":"aso","temp":"12.5","multiplier":"1.0304"},{"type":"aso","temp":"13","multiplier":"1.0283"},{"type":"aso","temp":"13.5","multiplier":"1.0262"},{"type":"aso","temp":"14","multiplier":"1.0241"},{"type":"aso","temp":"14.5","multiplier":"1.0221"},{"type":"aso","temp":"15","multiplier":"1.02"},{"type":"aso","temp":"15.5","multiplier":"1.018"},{"type":"aso","temp":"16","multiplier":"1.016"},{"type":"aso","temp":"16.5","multiplier":"1.0139"},{"type":"aso","temp":"17","multiplier":"1.0119"},{"type":"aso","temp":"17.5","multiplier":"1.0099"},{"type":"aso","temp":"18","multiplier":"1.0079"},{"type":"aso","temp":"18.5","multiplier":"1.0059"},{"type":"aso","temp":"19","multiplier":"1.0039"},{"type":"aso","temp":"19.5","multiplier":"1.002"},{"type":"aso","temp":"20","multiplier":"1"},{"type":"aso","temp":"20.5","multiplier":"0.998"},{"type":"aso","temp":"21","multiplier":"0.9961"},{"type":"aso","temp":"21.5","multiplier":"0.9941"},{"type":"aso","temp":"22","multiplier":"0.9922"},{"type":"aso","temp":"22.5","multiplier":"0.9903"},{"type":"aso","temp":"23","multiplier":"0.9883"},{"type":"aso","temp":"23.5","multiplier":"0.9864"},{"type":"aso","temp":"24","multiplier":"0.9845"},{"type":"aso","temp":"24.5","multiplier":"0.9826"},{"type":"aso","temp":"25","multiplier":"0.9807"},{"type":"aso","temp":"25.5","multiplier":"0.9788"},{"type":"aso","temp":"26","multiplier":"0.977"},{"type":"aso","temp":"26.5","multiplier":"0.9751"},{"type":"aso","temp":"27","multiplier":"0.9732"},{"type":"aso","temp":"27.5","multiplier":"0.9714"},{"type":"aso","temp":"28","multiplier":"0.9695"},{"type":"aso","temp":"28.5","multiplier":"0.9677"},{"type":"aso","temp":"29","multiplier":"0.9658"},{"type":"aso","temp":"29.5","multiplier":"0.964"},{"type":"aso","temp":"30","multiplier":"0.9622"},{"type":"aso","temp":"30.5","multiplier":"0.9604"},{"type":"aso","temp":"31","multiplier":"0.9586"},{"type":"aso","temp":"31.5","multiplier":"0.9568"},{"type":"aso","temp":"32","multiplier":"0.955"},{"type":"aso","temp":"32.5","multiplier":"0.9532"},{"type":"aso","temp":"33","multiplier":"0.9514"},{"type":"aso","temp":"33.5","multiplier":"0.9496"},{"type":"aso","temp":"34","multiplier":"0.9478"},{"type":"aso","temp":"34.5","multiplier":"0.9461"},{"type":"aso","temp":"35","multiplier":"0.9443"},{"type":"aso","temp":"35.5","multiplier":"0.9426"},{"type":"aso","temp":"36","multiplier":"0.9408"},{"type":"aso","temp":"36.5","multiplier":"0.9391"},{"type":"aso","temp":"37","multiplier":"0.9374"},{"type":"aso","temp":"37.5","multiplier":"0.9357"},{"type":"aso","temp":"38","multiplier":"0.9339"},{"type":"aso","temp":"38.5","multiplier":"0.9322"},{"type":"aso","temp":"39","multiplier":"0.9305"},{"type":"aso","temp":"39.5","multiplier":"0.9288"},{"type":"aso","temp":"40","multiplier":"0.9271"},{"type":"aso","temp":"40.5","multiplier":"0.9254"},{"type":"aso","temp":"41","multiplier":"0.9238"},{"type":"aso","temp":"41.5","multiplier":"0.9221"},{"type":"aso","temp":"42","multiplier":"0.9204"},{"type":"aso","temp":"42.5","multiplier":"0.9188"},{"type":"aso","temp":"43","multiplier":"0.9171"},{"type":"aso","temp":"43.5","multiplier":"0.9155"},{"type":"aso","temp":"44","multiplier":"0.9138"},{"type":"aso","temp":"44.5","multiplier":"0.9122"},{"type":"aso","temp":"45","multiplier":"0.9105"},{"type":"aso","temp":"45.5","multiplier":"0.9089"},{"type":"aso","temp":"46","multiplier":"0.9073"},{"type":"aso","temp":"46.5","multiplier":"0.9057"},{"type":"aso","temp":"47","multiplier":"0.9041"},{"type":"aso","temp":"47.5","multiplier":"0.9025"},{"type":"aso","temp":"48","multiplier":"0.9009"},{"type":"aso","temp":"48.5","multiplier":"0.8993"},{"type":"aso","temp":"49","multiplier":"0.8977"},{"type":"aso","temp":"49.5","multiplier":"0.8961"},{"type":"aso","temp":"50","multiplier":"0.8945"},{"type":"aso","temp":"50.5","multiplier":"0.893"},{"type":"aso","temp":"51","multiplier":"0.8914"},{"type":"aso","temp":"51.5","multiplier":"0.8898"},{"type":"aso","temp":"52","multiplier":"0.8883"},{"type":"aso","temp":"52.5","multiplier":"0.8867"},{"type":"aso","temp":"53","multiplier":"0.8852"},{"type":"aso","temp":"53.5","multiplier":"0.8837"},{"type":"aso","temp":"54","multiplier":"0.8821"},{"type":"aso","temp":"54.5","multiplier":"0.8806"},{"type":"aso","temp":"55","multiplier":"0.8791"},{"type":"aso","temp":"55.5","multiplier":"0.8776"},{"type":"aso","temp":"56","multiplier":"0.8761"},{"type":"aso","temp":"56.5","multiplier":"0.8746"},{"type":"aso","temp":"57","multiplier":"0.873"},{"type":"aso","temp":"57.5","multiplier":"0.8716"},{"type":"aso","temp":"58","multiplier":"0.8701"},{"type":"aso","temp":"58.5","multiplier":"0.8686"},{"type":"aso","temp":"59","multiplier":"0.8672"},{"type":"aso","temp":"59.5","multiplier":"0.8656"},{"type":"aso","temp":"60","multiplier":"0.8642"},{"type":"aso","temp":"60.5","multiplier":"0.8627"},{"type":"aso","temp":"61","multiplier":"0.8612"},{"type":"aso","temp":"61.5","multiplier":"0.8598"},{"type":"aso","temp":"62","multiplier":"0.8584"},{"type":"aso","temp":"62.5","multiplier":"0.8569"},{"type":"aso","temp":"63","multiplier":"0.8554"},{"type":"aso","temp":"63.5","multiplier":"0.854"},{"type":"aso","temp":"64","multiplier":"0.8526"},{"type":"aso","temp":"64.5","multiplier":"0.8511"},{"type":"aso","temp":"65","multiplier":"0.8497"},{"type":"aso","temp":"65.5","multiplier":"0.8483"},{"type":"aso","temp":"66","multiplier":"0.8469"},{"type":"aso","temp":"66.5","multiplier":"0.8455"},{"type":"aso","temp":"67","multiplier":"0.8427"},{"type":"aso","temp":"67.5","multiplier":"0.8441"},{"type":"aso","temp":"68","multiplier":"0.8413"},{"type":"aso","temp":"68.5","multiplier":"0.8399"},{"type":"aso","temp":"69","multiplier":"0.8385"},{"type":"aso","temp":"69.5","multiplier":"0.8371"},{"type":"aso","temp":"70","multiplier":"0.8358"},{"type":"hbd","temp":"10","multiplier":"1.0396"},{"type":"hbd","temp":"10.5","multiplier":"1.0376"},{"type":"hbd","temp":"11","multiplier":"1.0355"},{"type":"hbd","temp":"11.5","multiplier":"1.0335"},{"type":"hbd","temp":"12","multiplier":"1.0314"},{"type":"hbd","temp":"12.5","multiplier":"1.0294"},{"type":"hbd","temp":"13","multiplier":"1.0274"},{"type":"hbd","temp":"13.5","multiplier":"1.0254"},{"type":"hbd","temp":"14","multiplier":"1.0234"},{"type":"hbd","temp":"14.5","multiplier":"1.0214"},{"type":"hbd","temp":"15","multiplier":"1.0194"},{"type":"hbd","temp":"15.5","multiplier":"1.0174"},{"type":"hbd","temp":"16","multiplier":"1.0155"},{"type":"hbd","temp":"16.5","multiplier":"1.0135"},{"type":"hbd","temp":"17","multiplier":"1.0116"},{"type":"hbd","temp":"17.5","multiplier":"1.0096"},{"type":"hbd","temp":"18","multiplier":"1.0077"},{"type":"hbd","temp":"18.5","multiplier":"1.0057"},{"type":"hbd","temp":"19","multiplier":"1.0038"},{"type":"hbd","temp":"19.5","multiplier":"1.0019"},{"type":"hbd","temp":"20","multiplier":"1"},{"type":"hbd","temp":"20.5","multiplier":"0.9981"},{"type":"hbd","temp":"21","multiplier":"0.9962"},{"type":"hbd","temp":"21.5","multiplier":"0.9943"},{"type":"hbd","temp":"22","multiplier":"0.9924"},{"type":"hbd","temp":"22.5","multiplier":"0.9906"},{"type":"hbd","temp":"23","multiplier":"0.9887"},{"type":"hbd","temp":"23.5","multiplier":"0.9868"},{"type":"hbd","temp":"24","multiplier":"0.985"},{"type":"hbd","temp":"24.5","multiplier":"0.9831"},{"type":"hbd","temp":"25","multiplier":"0.9813"},{"type":"hbd","temp":"25.5","multiplier":"0.9795"},{"type":"hbd","temp":"26","multiplier":"0.9777"},{"type":"hbd","temp":"26.5","multiplier":"0.9758"},{"type":"hbd","temp":"27","multiplier":"0.974"},{"type":"hbd","temp":"27.5","multiplier":"0.9722"},{"type":"hbd","temp":"28","multiplier":"0.9704"},{"type":"hbd","temp":"28.5","multiplier":"0.9686"},{"type":"hbd","temp":"29","multiplier":"0.9668"},{"type":"hbd","temp":"29.5","multiplier":"0.9651"},{"type":"hbd","temp":"30","multiplier":"0.9633"},{"type":"hbd","temp":"30.5","multiplier":"0.9615"},{"type":"hbd","temp":"31","multiplier":"0.9598"},{"type":"hbd","temp":"31.5","multiplier":"0.958"},{"type":"hbd","temp":"32","multiplier":"0.9563"},{"type":"hbd","temp":"32.5","multiplier":"0.9545"},{"type":"hbd","temp":"33","multiplier":"0.9528"},{"type":"hbd","temp":"33.5","multiplier":"0.9511"},{"type":"hbd","temp":"34","multiplier":"0.9494"},{"type":"hbd","temp":"34.5","multiplier":"0.9476"},{"type":"hbd","temp":"35","multiplier":"0.9459"},{"type":"hbd","temp":"35.5","multiplier":"0.9442"},{"type":"hbd","temp":"36","multiplier":"0.9425"},{"type":"hbd","temp":"36.5","multiplier":"0.9409"},{"type":"hbd","temp":"37","multiplier":"0.9392"},{"type":"hbd","temp":"37.5","multiplier":"0.9375"},{"type":"hbd","temp":"38","multiplier":"0.9358"},{"type":"hbd","temp":"38.5","multiplier":"0.9342"},{"type":"hbd","temp":"39","multiplier":"0.9325"},{"type":"hbd","temp":"39.5","multiplier":"0.9308"},{"type":"hbd","temp":"40","multiplier":"0.9292"},{"type":"hbd","temp":"40.5","multiplier":"0.9276"},{"type":"hbd","temp":"41","multiplier":"0.9259"},{"type":"hbd","temp":"41.5","multiplier":"0.9243"},{"type":"hbd","temp":"42","multiplier":"0.9227"},{"type":"hbd","temp":"42.5","multiplier":"0.921"},{"type":"hbd","temp":"43","multiplier":"0.9194"},{"type":"hbd","temp":"43.5","multiplier":"0.9178"},{"type":"hbd","temp":"44","multiplier":"0.9162"},{"type":"hbd","temp":"44.5","multiplier":"0.9146"},{"type":"hbd","temp":"45","multiplier":"0.913"},{"type":"hbd","temp":"45.5","multiplier":"0.9114"},{"type":"hbd","temp":"46","multiplier":"0.9099"},{"type":"hbd","temp":"46.5","multiplier":"0.9083"},{"type":"hbd","temp":"47","multiplier":"0.9067"},{"type":"hbd","temp":"47.5","multiplier":"0.9052"},{"type":"hbd","temp":"48","multiplier":"0.9036"},{"type":"hbd","temp":"48.5","multiplier":"0.9021"},{"type":"hbd","temp":"49","multiplier":"0.9005"},{"type":"hbd","temp":"49.5","multiplier":"0.899"},{"type":"hbd","temp":"50","multiplier":"0.8974"},{"type":"hbd","temp":"50.5","multiplier":"0.8959"},{"type":"hbd","temp":"51","multiplier":"0.8944"},{"type":"hbd","temp":"51.5","multiplier":"0.8928"},{"type":"hbd","temp":"52","multiplier":"0.8913"},{"type":"hbd","temp":"52.5","multiplier":"0.8898"},{"type":"hbd","temp":"53","multiplier":"0.8883"},{"type":"hbd","temp":"53.5","multiplier":"0.8868"},{"type":"hbd","temp":"54","multiplier":"0.8853"},{"type":"hbd","temp":"54.5","multiplier":"0.8838"},{"type":"hbd","temp":"55","multiplier":"0.8823"},{"type":"hbd","temp":"55.5","multiplier":"0.8809"},{"type":"hbd","temp":"56","multiplier":"0.8794"},{"type":"hbd","temp":"56.5","multiplier":"0.8779"},{"type":"hbd","temp":"57","multiplier":"0.8764"},{"type":"hbd","temp":"57.5","multiplier":"0.875"},{"type":"hbd","temp":"58","multiplier":"0.8735"},{"type":"hbd","temp":"58.5","multiplier":"0.8721"},{"type":"hbd","temp":"59","multiplier":"0.8706"},{"type":"hbd","temp":"59.5","multiplier":"0.8692"},{"type":"hbd","temp":"60","multiplier":"0.8678"},{"type":"hbd","temp":"60.5","multiplier":"0.8663"},{"type":"hbd","temp":"61","multiplier":"0.8649"},{"type":"hbd","temp":"61.5","multiplier":"0.8635"},{"type":"hbd","temp":"62","multiplier":"0.8621"},{"type":"hbd","temp":"62.5","multiplier":"0.8606"},{"type":"hbd","temp":"63","multiplier":"0.8592"},{"type":"hbd","temp":"63.5","multiplier":"0.8578"},{"type":"hbd","temp":"64","multiplier":"0.8564"},{"type":"hbd","temp":"64.5","multiplier":"0.855"},{"type":"hbd","temp":"65","multiplier":"0.8536"},{"type":"hbd","temp":"65.5","multiplier":"0.8523"},{"type":"hbd","temp":"66","multiplier":"0.8509"},{"type":"hbd","temp":"66.5","multiplier":"0.8495"},{"type":"hbd","temp":"67","multiplier":"0.8481"},{"type":"hbd","temp":"67.5","multiplier":"0.8468"},{"type":"hbd","temp":"68","multiplier":"0.8454"},{"type":"hbd","temp":"68.5","multiplier":"0.844"},{"type":"hbd","temp":"69","multiplier":"0.8427"},{"type":"hbd","temp":"69.5","multiplier":"0.8413"},{"type":"hbd","temp":"70","multiplier":"0.84"}
];
const jsonData8130 = [
{"type8130":"Solid","material8130":"Plain Copper","area":"0.5","value":"36"},{"type8130":"Solid","material8130":"Plain Copper","area":"0.75","value":"24.5"},{"type8130":"Solid","material8130":"Plain Copper","area":"1","value":"18.1"},{"type8130":"Solid","material8130":"Plain Copper","area":"1.5","value":"12.1"},{"type8130":"Solid","material8130":"Plain Copper","area":"2.5","value":"7.41"},{"type8130":"Solid","material8130":"Plain Copper","area":"4","value":"4.61"},{"type8130":"Solid","material8130":"Plain Copper","area":"6","value":"3.08"},{"type8130":"Solid","material8130":"Plain Copper","area":"10","value":"1.83"},{"type8130":"Solid","material8130":"Plain Copper","area":"16","value":"1.15"},{"type8130":"Solid","material8130":"Plain Copper","area":"25","value":"0.727"},{"type8130":"Solid","material8130":"Plain Copper","area":"35","value":"0.524"},{"type8130":"Solid","material8130":"Plain Copper","area":"50","value":"0.387"},{"type8130":"Solid","material8130":"Plain Copper","area":"70","value":"0.268"},{"type8130":"Solid","material8130":"Plain Copper","area":"95","value":"0.193"},{"type8130":"Solid","material8130":"Plain Copper","area":"120","value":"0.153"},{"type8130":"Solid","material8130":"Plain Copper","area":"150","value":"0.124"},{"type8130":"Solid","material8130":"Tinned Copper","area":"0.5","value":"36.7"},{"type8130":"Solid","material8130":"Tinned Copper","area":"0.75","value":"24.8"},{"type8130":"Solid","material8130":"Tinned Copper","area":"1","value":"18.2"},{"type8130":"Solid","material8130":"Tinned Copper","area":"1.5","value":"12.2"},{"type8130":"Solid","material8130":"Tinned Copper","area":"2.5","value":"7.56"},{"type8130":"Solid","material8130":"Tinned Copper","area":"4","value":"4.7"},{"type8130":"Solid","material8130":"Tinned Copper","area":"6","value":"3.11"},{"type8130":"Solid","material8130":"Tinned Copper","area":"10","value":"1.84"},{"type8130":"Solid","material8130":"Tinned Copper","area":"16","value":"1.16"},{"type8130":"Solid","material8130":"Aluminium","area":"1.5","value":"18.1"},{"type8130":"Solid","material8130":"Aluminium","area":"2.5","value":"12.1"},{"type8130":"Solid","material8130":"Aluminium","area":"4","value":"7.41"},{"type8130":"Solid","material8130":"Aluminium","area":"6","value":"4.61"},{"type8130":"Solid","material8130":"Aluminium","area":"10","value":"3.08"},{"type8130":"Solid","material8130":"Aluminium","area":"16","value":"1.91"},{"type8130":"Solid","material8130":"Aluminium","area":"25","value":"1.2"},{"type8130":"Solid","material8130":"Aluminium","area":"35","value":"0.868"},{"type8130":"Solid","material8130":"Aluminium","area":"50","value":"0.641"},{"type8130":"Solid","material8130":"Aluminium","area":"70","value":"0.443"},{"type8130":"Solid","material8130":"Aluminium","area":"95","value":"0.32"},{"type8130":"Solid","material8130":"Aluminium","area":"120","value":"0.253"},{"type8130":"Solid","material8130":"Aluminium","area":"150","value":"0.206"},{"type8130":"Solid","material8130":"Aluminium","area":"185","value":"0.164"},{"type8130":"Solid","material8130":"Aluminium","area":"240","value":"0.125"},{"type8130":"Solid","material8130":"Aluminium","area":"300","value":"0.1"},{"type8130":"Stranded","material8130":"Plain Copper","area":"1","value":"18.1"},{"type8130":"Stranded","material8130":"Plain Copper","area":"1.5","value":"12.1"},{"type8130":"Stranded","material8130":"Plain Copper","area":"2.5","value":"7.41"},{"type8130":"Stranded","material8130":"Plain Copper","area":"4","value":"4.61"},{"type8130":"Stranded","material8130":"Plain Copper","area":"6","value":"3.08"},{"type8130":"Stranded","material8130":"Plain Copper","area":"10","value":"1.83"},{"type8130":"Stranded","material8130":"Plain Copper","area":"16","value":"1.15"},{"type8130":"Stranded","material8130":"Plain Copper","area":"25","value":"0.727"},{"type8130":"Stranded","material8130":"Plain Copper","area":"35","value":"0.524"},{"type8130":"Stranded","material8130":"Plain Copper","area":"50","value":"0.387"},{"type8130":"Stranded","material8130":"Plain Copper","area":"70","value":"0.268"},{"type8130":"Stranded","material8130":"Plain Copper","area":"95","value":"0.193"},{"type8130":"Stranded","material8130":"Plain Copper","area":"120","value":"0.153"},{"type8130":"Stranded","material8130":"Plain Copper","area":"150","value":"0.124"},{"type8130":"Stranded","material8130":"Plain Copper","area":"185","value":"0.0991"},{"type8130":"Stranded","material8130":"Plain Copper","area":"240","value":"0.0754"},{"type8130":"Stranded","material8130":"Plain Copper","area":"300","value":"0.0601"},{"type8130":"Stranded","material8130":"Plain Copper","area":"400","value":"0.047"},{"type8130":"Stranded","material8130":"Plain Copper","area":"500","value":"0.0366"},{"type8130":"Stranded","material8130":"Plain Copper","area":"630","value":"0.0283"},{"type8130":"Stranded","material8130":"Plain Copper","area":"800","value":"0.0221"},{"type8130":"Stranded","material8130":"Plain Copper","area":"1000","value":"0.0176"},{"type8130":"Stranded","material8130":"Plain Copper","area":"1200","value":"0.0151"},{"type8130":"Stranded","material8130":"Plain Copper","area":"1400","value":"0.0129"},{"type8130":"Stranded","material8130":"Plain Copper","area":"1600","value":"0.0113"},{"type8130":"Stranded","material8130":"Plain Copper","area":"1800","value":"0.0101"},{"type8130":"Stranded","material8130":"Plain Copper","area":"2000","value":"0.009"},{"type8130":"Stranded","material8130":"Plain Copper","area":"2500","value":"0.0072"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"1","value":"18.2"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"1.5","value":"12.2"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"2.5","value":"7.56"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"4","value":"4.7"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"6","value":"3.11"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"10","value":"1.84"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"16","value":"1.16"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"25","value":"0.734"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"35","value":"0.529"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"50","value":"0.391"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"70","value":"0.27"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"95","value":"0.195"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"120","value":"0.154"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"150","value":"0.126"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"185","value":"0.1"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"240","value":"0.0762"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"300","value":"0.0607"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"400","value":"0.0475"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"500","value":"0.0369"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"630","value":"0.0286"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"800","value":"0.0224"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"1000","value":"0.0177"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"1200","value":"0.0151"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"1400","value":"0.0129"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"1600","value":"0.0113"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"1800","value":"0.0101"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"2000","value":"0.009"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"2500","value":"0.0072"},{"type8130":"Stranded","material8130":"Aluminium","area":"1.5","value":"18.1"},{"type8130":"Stranded","material8130":"Aluminium","area":"2.5","value":"12.1"},{"type8130":"Stranded","material8130":"Aluminium","area":"4","value":"7.41"},{"type8130":"Stranded","material8130":"Aluminium","area":"6","value":"4.61"},{"type8130":"Stranded","material8130":"Aluminium","area":"10","value":"3.08"},{"type8130":"Stranded","material8130":"Aluminium","area":"16","value":"1.91"},{"type8130":"Stranded","material8130":"Aluminium","area":"25","value":"1.2"},{"type8130":"Stranded","material8130":"Aluminium","area":"35","value":"0.868"},{"type8130":"Stranded","material8130":"Aluminium","area":"50","value":"0.641"},{"type8130":"Stranded","material8130":"Aluminium","area":"70","value":"0.443"},{"type8130":"Stranded","material8130":"Aluminium","area":"95","value":"0.32"},{"type8130":"Stranded","material8130":"Aluminium","area":"120","value":"0.253"},{"type8130":"Stranded","material8130":"Aluminium","area":"150","value":"0.206"},{"type8130":"Stranded","material8130":"Aluminium","area":"185","value":"0.164"},{"type8130":"Stranded","material8130":"Aluminium","area":"240","value":"0.125"},{"type8130":"Stranded","material8130":"Aluminium","area":"300","value":"0.1"},{"type8130":"Stranded","material8130":"Aluminium","area":"400","value":"0.0778"},{"type8130":"Stranded","material8130":"Aluminium","area":"500","value":"0.0605"},{"type8130":"Stranded","material8130":"Aluminium","area":"630","value":"0.0469"},{"type8130":"Stranded","material8130":"Aluminium","area":"800","value":"0.0367"},{"type8130":"Stranded","material8130":"Aluminium","area":"1000","value":"0.0291"},{"type8130":"Stranded","material8130":"Aluminium","area":"1200","value":"0.0247"},{"type8130":"Stranded","material8130":"Aluminium","area":"1400","value":"0.0212"},{"type8130":"Stranded","material8130":"Aluminium","area":"1600","value":"0.0186"},{"type8130":"Stranded","material8130":"Aluminium","area":"1800","value":"0.0165"},{"type8130":"Stranded","material8130":"Aluminium","area":"2000","value":"0.0149"},{"type8130":"Stranded","material8130":"Aluminium","area":"2500","value":"0.0127"},{"type8130":"Flexible","material8130":"Plain Copper","area":"0.5","value":"39"},{"type8130":"Flexible","material8130":"Plain Copper","area":"0.75","value":"26"},{"type8130":"Flexible","material8130":"Plain Copper","area":"1","value":"19.5"},{"type8130":"Flexible","material8130":"Plain Copper","area":"1.5","value":"13.3"},{"type8130":"Flexible","material8130":"Plain Copper","area":"2.5","value":"7.98"},{"type8130":"Flexible","material8130":"Plain Copper","area":"4","value":"4.95"},{"type8130":"Flexible","material8130":"Plain Copper","area":"6","value":"3.3"},{"type8130":"Flexible","material8130":"Plain Copper","area":"10","value":"1.91"},{"type8130":"Flexible","material8130":"Plain Copper","area":"16","value":"1.21"},{"type8130":"Flexible","material8130":"Plain Copper","area":"25","value":"0.78"},{"type8130":"Flexible","material8130":"Plain Copper","area":"35","value":"0.554"},{"type8130":"Flexible","material8130":"Plain Copper","area":"50","value":"0.386"},{"type8130":"Flexible","material8130":"Plain Copper","area":"70","value":"0.272"},{"type8130":"Flexible","material8130":"Plain Copper","area":"95","value":"0.206"},{"type8130":"Flexible","material8130":"Plain Copper","area":"120","value":"0.161"},{"type8130":"Flexible","material8130":"Plain Copper","area":"150","value":"0.129"},{"type8130":"Flexible","material8130":"Plain Copper","area":"185","value":"0.106"},{"type8130":"Flexible","material8130":"Plain Copper","area":"240","value":"0.0801"},{"type8130":"Flexible","material8130":"Plain Copper","area":"300","value":"0.0641"},{"type8130":"Flexible","material8130":"Plain Copper","area":"400","value":"0.0486"},{"type8130":"Flexible","material8130":"Plain Copper","area":"500","value":"0.0384"},{"type8130":"Flexible","material8130":"Plain Copper","area":"630","value":"0.0287"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"0.5","value":"40.1"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"0.75","value":"26.7"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"1","value":"20"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"1.5","value":"13.7"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"2.5","value":"8.21"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"4","value":"5.09"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"6","value":"3.39"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"10","value":"1.95"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"16","value":"1.24"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"25","value":"0.795"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"35","value":"0.565"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"50","value":"0.393"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"70","value":"0.277"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"95","value":"0.21"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"120","value":"0.164"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"150","value":"0.132"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"185","value":"0.108"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"240","value":"0.0817"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"300","value":"0.0654"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"400","value":"0.0495"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"500","value":"0.0391"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"630","value":"0.0292"},{"type8130":"Flexible","material8130":"Aluminium","area":"25","value":"1.23"},{"type8130":"Flexible","material8130":"Aluminium","area":"35","value":"0.901"},{"type8130":"Flexible","material8130":"Aluminium","area":"50","value":"0.634"},{"type8130":"Flexible","material8130":"Aluminium","area":"70","value":"0.445"},{"type8130":"Flexible","material8130":"Aluminium","area":"95","value":"0.334"},{"type8130":"Flexible","material8130":"Aluminium","area":"120","value":"0.256"}];

document.getElementById('checkMaterialbutton').addEventListener('click', function() {
  checkButtonClicked = true;
  calculateMultiplier();
});
document.getElementById('conductorType613').addEventListener('change', calculateMultiplier);
document.getElementById('temperature').addEventListener('input', calculateMultiplier);
document.getElementById('tempUnit').addEventListener('change', calculateMultiplier);
document.getElementById('resistance').addEventListener('input', calculateMultiplier);
document.getElementById('resistanceUnit').addEventListener('change', calculateMultiplier);
document.getElementById('length').addEventListener('input', calculateMultiplier);
document.getElementById('lengthUnit').addEventListener('change', calculateMultiplier);
document.getElementById('inputType').addEventListener('change', calculateMultiplier);
document.getElementById('dynamicInputs').addEventListener('input', calculateMultiplier);

document.getElementById('material8130').addEventListener('change', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('type8130').addEventListener('change', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('temperature8130').addEventListener('input', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('tempUnit8130').addEventListener('change', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('resistance8130').addEventListener('input', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('resistanceUnit8130').addEventListener('change', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('length8130').addEventListener('input', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('lengthUnit8130').addEventListener('change', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('diameter').addEventListener('input', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('diameterUnit').addEventListener('change', () =>{calculateR20();calculateR20PerKm();});

function calculateMultiplier() {
  const temperature = parseFloat(document.getElementById('temperature').value);
  const conductorType613 = document.getElementById('conductorType613').value;
  const resistance = parseFloat(document.getElementById('resistance').value);
  const tempUnit = document.getElementById('tempUnit').value;
  const resistanceUnit = document.getElementById('resistanceUnit').value;
  const resultElement = document.getElementById('multiplierResult');
  const resistanceResultElement = document.getElementById('resistanceResult');
  const length = parseFloat(document.getElementById('length').value);
  const lengthUnit = document.getElementById('lengthUnit').value;

  console.log('Temprature:', temperature);
  console.log('Conductor Type:', conductorType613);
  console.log('Resistance:', resistance);
  console.log('Temp Unt:', tempUnit);

  // Convert to Celsius if temperature is in Fahrenheit
  const tempCelsius = tempUnit === 'F' ? (temperature - 32) * 5 / 9 : temperature;

  // Filter data for the selected conductor type
  const filteredData = jsonData.filter(item => item.type === conductorType613);

  // Find the nearest temperature
  const nearestEntry = filteredData.reduce((prev, curr) => 
    Math.abs(Number(curr.temp) - tempCelsius) < Math.abs(Number(prev.temp) - tempCelsius) ? curr : prev
  );
  console.log('Nearest Entry:', nearestEntry);
    if (!isNaN(tempCelsius)){
      resultElement.textContent = `Temp. Multiplier: ${nearestEntry.multiplier} at ${nearestEntry.temp}°C`;
    } else {
      resultElement.textContent = '';
    }
  
  // Calculate resistance at 20°C
  const resistanceAt20 = resistance * parseFloat(nearestEntry.multiplier);
  console.log('resistanceAt20:', resistanceAt20);

  if (!isNaN(resistanceAt20) && !isNaN(tempCelsius)) {
    resistanceResultElement.textContent = `Resistance at 20°C: ${resistanceAt20.toFixed(4)} ${resistanceUnit}`;
  } else {
    resistanceResultElement.textContent = '';
  }
  
    let lengthInm;
  switch (lengthUnit) {
    case 'km':
      lengthInm = length*1000 ;
      break;
    case 'ft':
      lengthInm = length * 0.3048;
      break;
    default:
      lengthInm = length;
  }
  console.log('lengthInm:', lengthInm);
  
  // Area conversion and calculation
  let areaInSqmm;
  const inputType = document.getElementById('inputType').value;

  if (inputType === 'diameter') {
    const diameter = parseFloat(document.getElementById('diameter').value);
    const unit = document.getElementById('inputUnit').value;
    const diameterInMm = unit === 'inch' ? diameter * 25.4 : diameter;
    areaInSqmm = Math.PI * Math.pow(diameterInMm / 2, 2);
  } else if (inputType === 'area') {
    const area = parseFloat(document.getElementById('area').value);
    const unit = document.getElementById('inputUnit').value;
    areaInSqmm = unit === 'sqinch' ? area * 645.16 : area;
  } else if (inputType === 'widthBreadth') {
    const width = parseFloat(document.getElementById('width').value);
    const breadth = parseFloat(document.getElementById('breadth').value);
    const unit = document.getElementById('inputUnit').value;
    const widthInMm = unit === 'inch' ? width * 25.4 : width;
    const breadthInMm = unit === 'inch' ? breadth * 25.4 : breadth;
    areaInSqmm = widthInMm * breadthInMm;
  }

  console.log('areaInSqmm:', areaInSqmm);
  
    let resistanceAt20inohm;
  switch (resistanceUnit) {
    case 'Micro Ohm':
      resistanceAt20inohm = resistanceAt20 / 1e6;
      break;
    case 'Milli Ohm':
      resistanceAt20inohm = resistanceAt20 / 1e3;
      break;
    case 'Killo Ohm':
      resistanceAt20inohm = resistanceAt20 * 1e3;
      break;
    default:
      resistanceAt20inohm = resistanceAt20;
  }
    console.log('check button not clicked loop 1');
    // Only proceed if check button was clicked
  if (!checkButtonClicked) {
    return;
  }
    console.log('check button not cliced loop 2');
  
    // Calculate Resistivity
 if (!isNaN(areaInSqmm) && !isNaN(lengthInm) && !isNaN(resistanceAt20inohm)) {
  const resistivity = ((resistanceAt20inohm * areaInSqmm) / lengthInm).toFixed(5);
  let conductivity = 0;

  if (conductorType613 === 'aso') {
    conductivity = parseFloat((((2 * 0.01724 - resistivity) / 0.01724) * 100).toFixed(2));
  } else if (conductorType613 === 'hbd') {
    conductivity = parseFloat((((2 * 0.017253 - resistivity) / 0.017253) * 100).toFixed(2));
  }
   
  console.log('conductivity', conductivity);

  if (conductivity > 100 || conductivity <= 0) {
    document.getElementById('resistivityResult').textContent = 
      `Parameter error`;
    document.getElementById('resistivityResult').style.color = '#8e8e8e';
  } else {
    if (conductorType613 === 'aso') {
      if (conductivity > 99.25) {
        document.getElementById('resistivityResult').innerHTML = 
          `Pass - Conductivity is ${conductivity}% higher than 99.25% as per IS 1897<br>Resistivity: ${resistivity} ohm·mm²/m`;
        document.getElementById('resistivityResult').style.color = '#25bc00'; //green
      } else if (conductivity === 99.25) {
        document.getElementById('resistivityResult').innerHTML = 
          `Pass - Conductivity is ${conductivity}% equal to 99.25% as per IS 1897<br>Resistivity: ${resistivity} ohm·mm²/m`;
        document.getElementById('resistivityResult').style.color = '#25bc00'; //green
      } else {
        document.getElementById('resistivityResult').innerHTML = 
          `Fail - Conductivity is ${conductivity}% lower than 99.25% as per IS 1897<br>Resistivity: ${resistivity} ohm·mm²/m`;
        document.getElementById('resistivityResult').style.color = 'red';
      }
    } else if (conductorType613 === 'hbd') {
      if (conductivity > 97) {
        document.getElementById('resistivityResult').innerHTML = 
          `Pass - Conductivity is ${conductivity}% higher than 97% as per IS 1897<br>Resistivity: ${resistivity} ohm·mm²/m`;
        document.getElementById('resistivityResult').style.color = '#25bc00'; //green
      } else if (conductivity === 97) {
        document.getElementById('resistivityResult').innerHTML = 
          `Pass - Conductivity is ${conductivity}% equal to 97% as per IS 1897<br>Resistivity: ${resistivity} ohm·mm²/m`;
        document.getElementById('resistivityResult').style.color = '#25bc00'; //green
      } else {
        document.getElementById('resistivityResult').innerHTML = 
          `Fail - Conductivity is ${conductivity}% lower than 97% as per IS 1897<br>Resistivity: ${resistivity} ohm·mm²/m`;
        document.getElementById('resistivityResult').style.color = 'red';
      }
    }
  }
} else {
  document.getElementById('resistivityResult').textContent = '';
}
}

function calculateR20() {
  const temperature8130 = parseFloat(document.getElementById('temperature8130').value);
  const resistance8130 = parseFloat(document.getElementById('resistance8130').value);
  const resultElement = document.getElementById('r20result18130');
  const tempUnit8130 = document.getElementById('tempUnit8130').value;
  const resistanceUnit8130 = document.getElementById('resistanceUnit8130').value;

  if (isNaN(temperature8130) || isNaN(resistance8130)) {
    resultElement.textContent = '';
    return;
  }

  // Convert to Celsius if temperature is in Fahrenheit
  const tempCelsius = tempUnit8130 === 'F' ? (temperature8130 - 32) * 5 / 9 : temperature8130;

  // Calculate resistance at 20°C
  const resistanceAt208130 = resistance8130 / (1 + 0.004 * (tempCelsius - 20));

  resultElement.textContent = `Resistance at 20°C: ${resistanceAt208130.toFixed(4)} ${resistanceUnit8130}`;
}

function calculateR20PerKm() {
  const resistance8130 = parseFloat(document.getElementById('resistance8130').value);
  const length8130 = parseFloat(document.getElementById('length8130').value);
  const resultElement = document.getElementById('r20result2');
  const resistanceUnit8130 = document.getElementById('resistanceUnit8130').value;
  const lengthUnit8130 = document.getElementById('lengthUnit8130').value;

  if (isNaN(resistance8130) || isNaN(length8130)) {
    resultElement.textContent = '';
    return;
  }

  // Convert resistance to Ohms
  let resistanceInOhms8130;
  switch (resistanceUnit8130) {
    case 'Micro Ohm':
      resistanceInOhms8130 = resistance8130 / 1e6;
      break;
    case 'Milli Ohm':
      resistanceInOhms8130 = resistance8130 / 1e3;
      break;
    case 'Killo Ohm':
      resistanceInOhms8130 = resistance8130 * 1e3;
      break;
    default:
      resistanceInOhms8130 = resistance8130;
  }

  // Convert length to Km
  let lengthInKm8130;
  switch (lengthUnit8130) {
    case 'm':
      lengthInKm8130 = length8130 / 1000;
      break;
    case 'ft':
      lengthInKm8130 = length8130 * 0.0003048;
      break;
    default:
      lengthInKm8130 = length8130;
  }

  // Calculate R20 in Ohm/km using resistanceAt20
  const temperature8130 = parseFloat(document.getElementById('temperature8130').value);
  const tempUnit8130 = document.getElementById('tempUnit8130').value;
  const tempCelsius = tempUnit8130 === 'F' ? (temperature8130 - 32) * 5 / 9 : temperature8130;
  const resistanceAt208130 = resistanceInOhms8130 / (1 + 0.004 * (tempCelsius - 20));

  const r20PerKm = resistanceAt208130 / lengthInKm8130;

  resultElement.textContent = `R20: ${r20PerKm.toFixed(4)} Ohm/km`;
}

function checkConductor() {
  console.log('Function started');
  const material8130 = document.getElementById('material8130').value.replace('_', ' ');
  const type8130 = document.getElementById('type8130').value;
  const inputType = document.getElementById('inputType').value;
  const dynamicInput = parseFloat(document.getElementById('dynamicInput').value);
  const inputUnit = document.getElementById('inputUnit').value;
  const resistance8130 = parseFloat(document.getElementById('resistance8130').value);
  const resistanceUnit8130 = document.getElementById('resistanceUnit8130').value;
  const length8130 = parseFloat(document.getElementById('length8130').value);
  const lengthUnit8130 = document.getElementById('lengthUnit8130').value;
  
  //console.log('Inputs fetched:', { material, type, inputType, dynamicInput, inputUnit, resistance, resistanceUnit });
  // Convert resistance to Ohms
  let resistanceInOhms8130;
  switch (resistanceUnit8130) {
    case 'Micro Ohm':
      resistanceInOhms8130 = resistance8130 / 1e6;
      break;
    case 'Milli Ohm':
      resistanceInOhms8130 = resistance8130 / 1e3;
      break;
    case 'Killo Ohm':
      resistanceInOhms8130 = resistance8130 * 1e3;
      break;
    default:
      resistanceInOhms8130 = resistance8130;
  }

  // Convert length to Km
  let lengthInKm8130;
  switch (lengthUnit8130) {
    case 'm':
      lengthInKm8130 = length8130 / 1000;
      break;
    case 'ft':
      lengthInKm8130 = length8130 * 0.0003048;
      break;
    default:
      lengthInKm8130 = length8130;
  }

  // Calculate R20 in Ohm/km using resistanceAt20
  const temperature8130 = parseFloat(document.getElementById('temperature8130').value);
  const tempUnit8130 = document.getElementById('tempUnit8130').value;
  const tempCelsius = tempUnit8130 === 'F' ? (temperature8130 - 32) * 5 / 9 : temperature8130;
  const resistanceAt208130 = resistanceInOhms8130 / (1 + 0.004 * (tempCelsius - 20));

  const r20PerKm = resistanceAt208130 / lengthInKm8130;  
  
  // Convert input to mm² if necessary
  let areaInSqmm = dynamicInput;
  if (inputType === 'diameter' && inputUnit === 'inch') {
    const radius = dynamicInput / 2 * 25.4; // Convert inches to mm
    areaInSqmm = 3.14 * radius * radius; //Use 3.14 and not Math.PI
  } else if (inputType === 'diameter' && inputUnit === 'mm') {
    const radius = dynamicInput / 2;
    areaInSqmm = 3.14 * radius * radius; //Use 3.14 and not Math.PI
  } else if (inputType === 'area' && inputUnit === 'sqinch') {
    areaInSqmm = dynamicInput * 645.16; // Convert inch² to mm²
  } else if (inputType === 'area' && inputUnit === 'sqmm') {
    areaInSqmm = dynamicInput * 1; // Convert inch² to mm²
  }
  
  console.log('Converted Area to mm²:', areaInSqmm);

  // Find matching data from JSON
  //const result = jsonData.find(entry => entry.material === material && entry.type === type && parseFloat(entry.area) === parseFloat(areaInSqmm));
  // Find matching or next higher data from JSON
  const filteredData = jsonData8130.filter(entry => entry.material8130 === material8130 && entry.type8130 === type8130);
  const sortedData = filteredData.sort((a, b) => parseFloat(a.area) - parseFloat(b.area));
  const matchingEntry = sortedData.find(entry => parseFloat(entry.area) >= areaInSqmm);
  //const matchingArea = parseFloat(matchingEntry.area);
  //const nearestrvalue = filteredData.sort((a, b) => parseFloat(a.area) - parseFloat(b.area)).find(entry => parseFloat(entry.area) >= areaInSqmm);
  
  console.log(`Material8130: ${material8130}, area_json: ${matchingEntry.area}, resistancemax_json: ${matchingEntry.value}, Type8130: ${type8130}, Area: ${areaInSqmm}, Length8130: ${lengthInKm8130}, Resistance: ${r20PerKm.toPrecision(4)}`);

  if (matchingEntry) {
    const maxResistance8130 = parseFloat(matchingEntry.value);
    console.log(`rinohm: ${r20PerKm}, rmax: ${maxResistance8130}`);

    if (r20PerKm <= matchingEntry.value) {
      document.getElementById('r20result3').textContent = `Pass - ${r20PerKm.toFixed(4)} ohm/km is lower than ${maxResistance8130.toFixed(4)} ohm/km for ${matchingEntry.area} mm² as per IS 8130.`;
      document.getElementById('r20result3').style.color = '#25bc00';
      console.log(`Pass`);
    } else {
      document.getElementById('r20result3').textContent = `Fail - ${r20PerKm.toFixed(4)} ohm/km is higher than ${maxResistance8130.toFixed(4)} ohm/km for ${matchingEntry.area} mm² as per IS 8130.`;
      document.getElementById('r20result3').style.color = 'red';
      console.log(`Fail`);
    }
  } else {
    document.getElementById('r20result3').textContent = `No matching data found in IS 8130.`;
    document.getElementById('r20result3').style.color = 'black';
  }
}


