-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `gangwar`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `colshapes`
--

CREATE TABLE `colshapes` (
  `id` int(11) NOT NULL,
  `frak` text NOT NULL,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `z` double NOT NULL,
  `size` int(11) NOT NULL,
  `dim` int(11) NOT NULL,
  `fraktype` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `colshapes`
--

INSERT INTO `colshapes` (`id`, `frak`, `x`, `y`, `z`, `size`, `dim`, `fraktype`) VALUES
(1, 'ballas', 84.15628814697266, -1966.693115234375, 20.939178466796875, 3, 0, 'gang'),
(2, 'gf', 1355.003662109375, -595.8958129882812, 74.4878921508789, 3, 0, 'gang'),
(3, 'mg13', 1163.2845458984375, -1641.5045166015625, 36.96255874633789, 3, 0, 'gang'),
(4, 'lcn', -1532.0445556640625, 78.72225952148438, 56.760498046875, 3, 0, 'mafia'),
(5, 'rednecks', 2440.016845703125, 5007.14013671875, 46.65184783935547, 3, 0, 'gang'),
(6, 'lost', 1994.46044921875, 3040.02392578125, 47.02890396118164, 3, 0, 'gang'),
(7, 'lsv', -1075.901611328125, -1671.7640380859375, 4.439389228820801, 3, 0, 'gang'),
(8, 'triaden', 1373.1475830078125, 1151.572998046875, 113.75895690917969, 3, 0, 'mafia'),
(9, 'orga', -1116.4783935546875, 4933.7744140625, 218.36109924316406, 3, 0, 'mafia');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `faction_cars`
--

CREATE TABLE `faction_cars` (
  `id` int(11) NOT NULL,
  `faction` varchar(32) NOT NULL,
  `car` varchar(32) NOT NULL,
  `pos_x` double NOT NULL,
  `pos_y` double NOT NULL,
  `pos_z` double NOT NULL,
  `heading_x` double NOT NULL,
  `heading_y` double NOT NULL,
  `heading_z` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `faction_cars`
--

INSERT INTO `faction_cars` (`id`, `faction`, `car`, `pos_x`, `pos_y`, `pos_z`, `heading_x`, `heading_y`, `heading_z`) VALUES
(3, 'rednecks', 'schafterg', 2393.084716796875, 5083.576171875, 46.68191909790039, -7.441954612731934, 1.8848224878311157, 52.456390380859375),
(4, 'rednecks', 'schafterg', 2398.77734375, 5079.40234375, 46.44804763793945, -2.2717833518981934, 0.3057329058647156, 53.164886474609375),
(5, 'rednecks', 'schafterg', 2403.960205078125, 5075.63427734375, 46.31690979003906, -0.6840426325798035, -0.2493581473827362, 54.90509033203125),
(6, 'rednecks', 'schafterg', 2409.09765625, 5071.8369140625, 46.27484893798828, -0.6451660990715027, 0.14512930810451508, 53.30657958984375),
(7, 'rednecks', 'schafterg', 2414.006591796875, 5068.09814453125, 46.16169357299805, -1.0815105438232422, -1.4775336980819702, 50.1539306640625),
(8, 'rednecks', 'schafterg', 2418.885986328125, 5064.4228515625, 46.013519287109375, -0.7344196438789368, -0.34783709049224854, 51.815185546875),
(9, 'rednecks', 'jugular', 2396.601806640625, 5087.2705078125, 46.776546478271484, -1.9371302127838135, -0.82541424036026, 50.53179931640625),
(10, 'rednecks', 'jugular', 2401.242919921875, 5083.6103515625, 46.51582717895508, -2.238126754760742, -1.4601795673370361, 52.53167724609375),
(11, 'rednecks', 'jugular', 2405.88623046875, 5079.8623046875, 46.3760986328125, -0.5023338794708252, -0.9429594874382019, 51.07806396484375),
(12, 'rednecks', 'jugular', 2410.518310546875, 5076.486328125, 46.27656173706055, -0.5073984265327454, -0.8185093998908997, 52.776153564453125),
(13, 'rednecks', 'jugular', 2415.2099609375, 5072.87060546875, 46.1677360534668, -1.2644073963165283, -0.523419976234436, 52.08050537109375),
(14, 'rednecks', 'jugular', 2419.645263671875, 5069.47216796875, 46.052635192871094, -1.1563140153884888, -0.6052748560905457, 52.590576171875),
(15, 'rednecks', 'schafter6', 2411.67919921875, 5059.5283203125, 46.0337028503418, 1.0491663217544556, -1.3086698055267334, 16.674163818359375),
(16, 'rednecks', 'schafter6', 2415.194580078125, 5056.83642578125, 45.99360275268555, -0.9396920204162598, -1.2183010578155518, 13.7874755859375),
(17, 'rednecks', 'bf400', 2418.45654296875, 5054.07421875, 45.77426528930664, -1.968066692352295, 10.368279457092285, 357.0562744140625),
(18, 'rednecks', 'bf400', 2420.001220703125, 5053.17724609375, 45.764991760253906, -1.227515459060669, 6.483521938323975, 0.442626953125),
(19, 'rednecks', 'bf400', 2421.245361328125, 5052.46826171875, 45.76314926147461, 2.7826273441314697, 10.07365608215332, 353.9553527832031),
(20, 'rednecks', 'bf400', 2422.56591796875, 5051.75341796875, 45.763919830322266, 2.4532198905944824, 7.615052223205566, 358.6535339355469),
(21, 'rednecks', 'drafter', 2425.15234375, 5049.04541015625, 45.77476119995117, 2.379380226135254, -2.40114426612854, 1.669219970703125),
(22, 'rednecks', 'drafter', 2428.28759765625, 5047.115234375, 45.7708625793457, 3.197709798812866, -1.3615503311157227, 1.319244384765625),
(23, 'rednecks', 'kuruma', 2410.8818359375, 5083.6806640625, 46.75449752807617, -1.7176169157028198, -0.6413182020187378, 47.850311279296875),
(24, 'rednecks', 'kuruma', 2415.428955078125, 5079.9345703125, 46.55195999145508, -1.0021475553512573, -2.5620055198669434, 53.86138916015625),
(25, 'rednecks', 'kuruma', 2419.772705078125, 5076.63427734375, 46.38386154174805, -1.463590383529663, -0.2602193057537079, 52.70477294921875);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `faction_tuning`
--

CREATE TABLE `faction_tuning` (
  `id` int(11) NOT NULL,
  `car` varchar(32) NOT NULL,
  `modtype` int(11) NOT NULL,
  `modindex` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `faction_tuning`
--

INSERT INTO `faction_tuning` (`id`, `car`, `modtype`, `modindex`) VALUES
(1, 'drafter', 0, 5),
(2, 'drafter', 4, 2),
(3, 'drafter', 11, 1),
(4, 'drafter', 22, 0),
(5, 'drafter', 53, 1),
(6, 'drafter', 55, 1),
(7, 'schafterg', 0, 1),
(8, 'schafterg', 11, 1),
(9, 'schafterg', 22, 0),
(10, 'schafterg', 53, 1),
(11, 'schafterg', 55, 1),
(21, 'schafter6', 0, 1),
(22, 'schafter6', 11, 3),
(23, 'schafter6', 15, 3),
(24, 'schafter6', 22, 0),
(25, 'schafter6', 53, 1),
(26, 'schafter6', 55, 1),
(27, 'schafter6', 18, 0),
(28, 'kuruma', 22, 0),
(29, 'kuruma', 53, 1),
(30, 'kuruma', 55, 1),
(31, 'jugular', 11, 1),
(32, 'jugular', 22, 0),
(33, 'jugular', 53, 1),
(34, 'jugular', 55, 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ffa_spawns`
--

CREATE TABLE `ffa_spawns` (
  `id` int(11) NOT NULL,
  `ffa` int(11) NOT NULL,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `z` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `ffa_spawns`
--

INSERT INTO `ffa_spawns` (`id`, `ffa`, `x`, `y`, `z`) VALUES
(1, 1, 131.03121948242188, -989.6233520507812, 29.35209846496582),
(2, 1, 178.09918212890625, -875.5635375976562, 30.92080307006836),
(3, 1, 222.36068725585938, -928.2314453125, 30.68678855895996),
(4, 1, 168.12452697753906, -995.5804443359375, 29.354185104370117),
(5, 1, 136.6728973388672, -988.537841796875, 29.355335235595703),
(6, 1, 179.0377197265625, -994.7080688476562, 29.291824340820312),
(7, 1, 151.87660217285156, -920.5578002929688, 30.1065673828125),
(8, 1, 188.21112060546875, -1013.4005737304688, 29.313173294067383),
(9, 1, 208.74961853027344, -1000.2320556640625, 29.291845321655273),
(10, 1, 139.36595153808594, -955.367431640625, 29.683889389038086),
(11, 1, 196.31268310546875, -994.8193359375, 30.091928482055664),
(12, 1, 181.58792114257812, -965.3744506835938, 29.579233169555664),
(13, 1, 175.50537109375, -937.67236328125, 30.091909408569336),
(14, 1, 217.56028747558594, -895.8761596679688, 30.692686080932617),
(15, 1, 263.0151062011719, -874.7175903320312, 29.157180786132812),
(16, 1, 215.67333984375, -934.7403564453125, 24.14157485961914),
(17, 1, 151.9551544189453, -963.4129028320312, 30.09191131591797),
(18, 1, 212.05941772460938, -957.2402954101562, 30.441709518432617),
(19, 1, 237.21485900878906, -905.8319091796875, 28.893693923950195),
(20, 1, 201.71131896972656, -880.2003784179688, 31.498353958129883),
(21, 1, 162.66221618652344, -917.3997802734375, 30.18037223815918),
(22, 1, 197.903076171875, -935.3107299804688, 30.686811447143555),
(23, 1, 178.19512939453125, -906.1447143554688, 30.692825317382812);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `markers`
--

CREATE TABLE `markers` (
  `id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `z` double NOT NULL,
  `radius` int(11) NOT NULL,
  `r` int(11) NOT NULL,
  `g` int(11) NOT NULL,
  `b` int(11) NOT NULL,
  `a` int(11) NOT NULL,
  `dim` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `markers`
--

INSERT INTO `markers` (`id`, `type`, `x`, `y`, `z`, `radius`, `r`, `g`, `b`, `a`, `dim`) VALUES
(1, 1, 198.4713134765625, -936.09033203125, 20.13947868347168, 200, 224, 50, 50, 255, 1001);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `npc`
--

CREATE TABLE `npc` (
  `id` int(11) NOT NULL,
  `fraktion` text NOT NULL,
  `type` varchar(32) DEFAULT NULL,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `z` double NOT NULL,
  `heading` double NOT NULL,
  `ped` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `npc`
--

INSERT INTO `npc` (`id`, `fraktion`, `type`, `x`, `y`, `z`, `heading`, `ped`) VALUES
(1, 'ballas', 'garage', 84.1562, -1966.6931, 20.9391, 230.3266, 'g_m_y_ballaeast_01'),
(2, 'grove', 'garage', 1355.0036, -595.8958, 74.4878, 350.3266, 'mp_m_famdd_01'),
(3, 'mg13', 'garage', 1163.2845, -1641.5045, 36.9625, 200.3266, 'ig_jimmyboston'),
(4, 'lcn', 'garage', -1532.0445, 78.7222, 56.7604, 0.3266, 'u_m_m_jewelthief'),
(5, 'rednecks', 'garage', 2440.0168, 5007.1401, 46.6518, 320.2783, 'a_m_m_hillbilly_01'),
(6, 'lost', 'garage', 1994.4604, 3040.0239, 47.0289, 143.8771, 'g_m_y_lost_01'),
(7, 'lsv', 'garage', -1075.9016, -1671.764, 4.4393, 300.6177, 'u_m_y_mani'),
(8, 'triaden', 'garage', 1373.1475, 1151.5729, 113.7589, 118.6257, 'ig_paper'),
(9, 'orga', 'garage', -1116.4783, 4933.7744, 218.361, 116.0853, 's_m_m_movspace_01');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `spawns_garage`
--

CREATE TABLE `spawns_garage` (
  `id` int(11) NOT NULL,
  `team` text NOT NULL,
  `pos_x` double NOT NULL,
  `pos_y` double NOT NULL,
  `pos_z` double NOT NULL,
  `heading_x` double NOT NULL,
  `heading_y` double NOT NULL,
  `heading_z` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `socialclub` varchar(64) NOT NULL,
  `admin` int(11) NOT NULL DEFAULT 0,
  `kills` int(11) NOT NULL DEFAULT 0,
  `deaths` int(11) NOT NULL DEFAULT 0,
  `lastlogin` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `colshapes`
--
ALTER TABLE `colshapes`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `faction_cars`
--
ALTER TABLE `faction_cars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faction` (`faction`);

--
-- Indizes für die Tabelle `faction_tuning`
--
ALTER TABLE `faction_tuning`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `ffa_spawns`
--
ALTER TABLE `ffa_spawns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ffa` (`ffa`);

--
-- Indizes für die Tabelle `markers`
--
ALTER TABLE `markers`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `npc`
--
ALTER TABLE `npc`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `spawns_garage`
--
ALTER TABLE `spawns_garage`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `socialclub` (`socialclub`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `colshapes`
--
ALTER TABLE `colshapes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT für Tabelle `faction_cars`
--
ALTER TABLE `faction_cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT für Tabelle `faction_tuning`
--
ALTER TABLE `faction_tuning`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT für Tabelle `ffa_spawns`
--
ALTER TABLE `ffa_spawns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT für Tabelle `markers`
--
ALTER TABLE `markers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `npc`
--
ALTER TABLE `npc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT für Tabelle `spawns_garage`
--
ALTER TABLE `spawns_garage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
