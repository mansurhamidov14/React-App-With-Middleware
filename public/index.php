<?
/* $host = '127.0.0.1';
$db   = 'socnetwork';
$user = 'root';
$pass = '';
$charset = 'utf8';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO($dsn, $user, $pass, $opt);
$table = $pdo->query('SELECT * FROM categories') ->fetchAll();
$array = array();

function recursive($data, $pid = 0, $level = 0) {
    $array = [];

    foreach ($data as $row)   { //перебираем строки
        if ($row['pid'] == $pid)   { //Начинаем со строк, pid которых передан в функцию, у нас это 0, т.е. корень сайта
            //Собираем строку в ассоциативный массив
            $_row['uid']    = $row['uid'];
            $_row['pid']    = $row['pid'];
            $_row['title']   = $_row['title']   = str_pad('', $level*3, '.').$row['title']; //Функцией str_pad добавляем точки
            $_row['level']  = $level;       //Добавляем уровень

            $array[] = $_row; //Прибавляем каждую строку к выходному массиву

            //Строка обработана, теперь запустим эту же функцию для текущего uid, то есть
            //пойдёт обратотка дочерней строки (у которой этот uid является pid-ом)
            recursive($data, $row['uid'], $level + 1);
        }
    }
    return $array;
}
$myArray = recursive($table); //Запускаем
foreach ($myArray as $row) {
  echo $row['title'].'<br>';
} */

// $testIds = [14853, 14849, 14848, 14847, 14846, 14845, 14831, 14830, 14829, 14824, 14823, 14822, 14821, 14820, 14819, 14814, 14813, 14811, 14810, 14808, 14804, 14803, 14800, 14795, 14791, 14786, 14784, 14765, 14763, 14762, 14761, 14731, 14715, 14714];
//
// foreach ($testIds as $tId) {
// 	echo "INSERT INTO tests_categories_rel (test_id, category_id, ordering) VALUES (".$tId.", 239, 0);<br>";
// }

$users = [
	['id' => 1, 'name' => 'Mansur', 'lastname' => 'Hamidov'],
	['id' => 2, 'name' => 'Mans', 'lastname' => 'Hamdulla'],
	['id' => 3, 'name' => 'Xeste', 'lastname' => 'Uwaq'],
];

print json_encode($users);
