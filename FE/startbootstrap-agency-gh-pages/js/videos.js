let videos = [
    ["fairyTails", 
    ["https://www.youtube.com/embed/Kymxpr32uVQ", "O gato das botas"],
    ["https://www.youtube.com/embed/PL_ZU0xcqi8", "O feiticeiro de Oz"], 
    ["https://www.youtube.com/embed/uxcrfaD3yq0", "O livro da selva"],
    ["https://www.youtube.com/embed/YQKM5T4X0kM","Os três porquinhos"],
    ["https://www.youtube.com/embed/_Xv3suV-PZQ", "O príncipe sapo"],
    ["https://www.youtube.com/embed/0LLZEvXP4KQ", "O patinho feio"]
    ],
    ["languages",
    ["https://www.youtube.com/embed/DR-cfDsHCGA", "Números em inglês"],
    ["https://www.youtube.com/embed/ybt2jhCQ3lA", "Cores em inglês"],
    ["https://www.youtube.com/embed/v5aVK0APPkU", "Animais em inglês"],
    ["https://www.youtube.com/embed/Q2CNDJysSu8", "Números em francês"],
    ["https://www.youtube.com/embed/DAjssWEquzM", "Cores em francês"],
    ["https://www.youtube.com/embed/hx6BJ9j1B3M", "Animais em francês"]
    ],
    ["diverse",
    ["https://www.youtube.com/embed/g1knSkH-Swg", "Lady Bug"],
    ["https://www.youtube.com/embed/RGImJxsnjX8", "Mickey Mouse"],
    ["https://www.youtube.com/embed/ZCNlQv6pyDg", "Nody"],
    ["https://www.youtube.com/embed/9MIQcDdDk7I", "Bob o construtor"],
    ["https://www.youtube.com/embed/yntso82TPO8", "Masha e o Urso"],
    ["https://www.youtube.com/embed/kE1lxvGFlnM", "Patrulha Pata"]
    ],
    ["gameplays",
   [ "https://www.youtube.com/embed/0Ltse-yfne0", "RicFazeres Spider-man"],
    ["https://www.youtube.com/embed/8iWlhYexIUo", "RicFazeres Subnáutica"],
    ["https://www.youtube.com/embed/EtjHxuZ8a1s", "RicFazeres FIFA"],
    ["https://www.youtube.com/embed/JR0Xk8iW_aE", "Feromonas Minecraft"],
    ["https://www.youtube.com/embed/u-nQ93vDT5c","Feromonas Minecraft"],
    ["https://www.youtube.com/embed/HVlIMDm64MQ", "Sea3po AmongUs"]
    ]
];

function showVideos(){
    for(i=0;i<videos.length;i++){
        let code = ``;
        for(n=1;n<videos[i].length;n++){
            code = code + `<div class="col-lg-4 col-md-6 mb-4 justify-content-md-center">
            <p>${videos[i][n][1]}</p>
            <div class="iframe-container">
              <iframe width="560" height="315" src="${videos[i][n][0]}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
          </div>`;
        }
        document.getElementById(videos[i][0]).innerHTML = code;
    }
}