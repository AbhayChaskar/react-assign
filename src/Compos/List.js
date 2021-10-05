import ListDetails from "./ListDetails";

function List(){
const employees=[
    {id:1,ename:"A",salary:20000,Domain:"JS",mobile:9225566081,experience:"1 years"},
    {id:2,ename:"B",salary:25000,Domain:"QA",mobile:9266347812,experience:"1 year"},
    {id:3,ename:"C",salary:30000,Domain:"PHP",mobile:9266347812,experience:"2 years"},
    {id:4,ename:"D",salary:40000,Domain:"FS",mobile:9266347812,experience:"3 years"},
    {id:5,ename:"E",salary:45000,Domain:"MS",mobile:9266347812,experience:"3 years"},
    {id:6,ename:"F",salary:50000,Domain:"DS",mobile:9266347812,experience:"2 years"},
    {id:7,ename:"G",salary:60000,Domain:"JS",mobile:9266347812,experience:"4 years"},
    {id:8,ename:"H",salary:70000,Domain:"QA",mobile:9266347812,experience:"5 years"},
    {id:9,ename:"I",salary:80000,Domain:"PHP",mobile:9266347812,experience:"7 years"},
    {id:10,ename:"J",salary:90000,Domain:"FS",mobile:9266347812,experience:"6 years"},
    {id:11,ename:"K",salary:22000,Domain:"MS",mobile:9266347812,experience:"6 year"},
    {id:12,ename:"L",salary:33000,Domain:"DS",mobile:9266347812,experience:"5 years"},
    {id:13,ename:"M",salary:44000,Domain:"JS",mobile:9266347812,experience:"6 years"},
    {id:14,ename:"N",salary:55000,Domain:"QA",mobile:9266347812,experience:"3 years"},
    {id:15,ename:"O",salary:66000,Domain:"PHP",mobile:9266347812,experience:"1 year"},
    {id:16,ename:"P",salary:77000,Domain:"FS",mobile:9266347812,experience:"8 year"},
    {id:17,ename:"Q",salary:88000,Domain:"MS",mobile:9266347812,experience:"9 year"},
    {id:19,ename:"R",salary:99000,Domain:"DS",mobile:9266347812,experience:"2 year"},
    {id:20,ename:"S",salary:33300,Domain:"JS",mobile:9266347812,experience:"3 year"},
];
return(
    <ListDetails employees={employees}/>
)
}
export default List;
