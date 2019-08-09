import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suplmentos-parent-list',
  templateUrl: './suplmentos-parent-list.component.html',
  styleUrls: ['./suplmentos-parent-list.component.scss']
})
export class SuplmentosParentListComponent implements OnInit {

  list:any[]
  constructor() {
    this.list= new Array();
    let suplm1={
      img:"../../../../../../assets/img/suplementos/suplementosList/protena-suero-de-leche.jpg",
      titulo:"PROTEÍNA DE SUERO",
      msg:"La proteína es esencial. En el proceso de síntesis de proteínas, nuestros músculos crecen y se adaptan. Durante el ejercicio, nuestras fibras musculares pueden romperse y la proteína ayuda al cuerpo a reparar esto con rapidez, mejorando los tiempos de recuperación. La Proteína de Suero, también se digiere y absorbe rápidamente por lo que es perfecto para su consumo en el post-entrenamiento."
    };
    let suplm2={
      img:"../../../../../../assets/img/suplementos/suplementosList/bcaa-instantaneo.jpg",
      titulo:"BCAA INSTANTÁNEOS",
      msg:"Los BCAA INSTANTÁNEOS son aminoácidos de cadena ramificada instantáneos. Aminoácidos como la Leucina, Isoleucina y Valina. Los BCAA ayudan en el proceso de síntesis de las proteínas, así como reducir el dolor muscular y la ruptura, por lo que es un complemento perfecto durante los entrenamientos intensos para la construcción del músculo."
    };

    let suplm3={
      img:"../../../../../../assets/img/suplementos/suplementosList/creatina.jpg",
      titulo:"CREATINA",
      msg:"La Creatina es uno de los suplementos más ergogénicos disponibles. Los efectos positivos e indiscutibles de la Creatina están en relación con el aumento de tamaño del músculo, con la fuerza y su rendimiento. La suplementación ayuda a resintetizar el ATP (adenosín trifosfato), fuente de energía inmediata del cuerpo, lo que le permite trabajar a una mayor intensidad durante más tiempo. Esto es perfecto para los deportes explosivos tales como Rugby, Crossfit y Pesas."
    };

    let suplm4={
      img:"../../../../../../assets/img/suplementos/suplementosList/hmdb.jpg",
      titulo:"HMB",
      msg:"El HMB es un metabolito del aminoácido de la leucina (un producto creado cuando la leucina se metaboliza en el cuerpo). Está demostrado que el HMB ayuda a construir tejido muscular en la síntesis de proteínas, además de ayudar a reducir la degradación muscular inducida, y actúa como un anti-catabólico durante el entrenamiento, lo que permite entrenar más duro para obtener mejores resultados."
    };

    let suplm5={
      img:"../../../../../../assets/img/suplementos/suplementosList/zma.jpg",
      titulo:"ZMA",
      msg:"El ZMA es un suplemento que contiene Zinc, Magnesio y Vitamina B6 y que ayuda a aumentar los niveles de hormona natural, la fuerza muscular, inducir a un mejor sueño, ayudar al sistema inmunológico y apoyar la recuperación. Cuando se incrementa la intensidad o frecuencia del entrenamiento, el cuerpo, y más concretamente el SNC (sistema nervioso central), está bajo mucho estrés. La suplementación con ZMA puede ayudar a contribuir a la recuperación e además de mejorar la calidad del sueño (la calidad y duración del sueño es vital para que el músculo se encuentre en condiciones óptimas y para la reparación del SNC)."
    };

    this.list.push(suplm1);
    this.list.push(suplm2);
    this.list.push(suplm3);
    this.list.push(suplm4);
    this.list.push(suplm5);

   }

  ngOnInit() {
  }

}
