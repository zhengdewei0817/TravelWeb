<?php

header('Content-type: text/json');
$fruits = array (
	"status" =>200,
	"message" => "无异常",
    "list"  => array(array("id" => 312, "name" => "蓬莱阁", "description" => "7月-9月是蓬莱最佳旅游时间。 蓬莱属北温带季风型大陆性气候，夏无酷暑，冬无严寒，年平均气温11．8℃，
全年最低气温为零下2.3℃，最高气温为24.6℃，气候怡人，湿润凉爽。但蓬莱的昼夜温差比较大。。。。。。","type"=>1,"picture"=>"img/pic1.jpg"),
    array("id" => 311, "name" => "北京市", "description" => "北京，中国首都。每个人心中，都有一个“我爱北京天安门”的北京情结，都曾梦想着生活在传说中的紫禁城；梦想着穿梭在王朔笔下的胡同和大院;
    也梦想着爬上万里长城，大喊：我是好汉！在每个人心中，都一个人属于自己的北京。 北京是一座包容万象、海纳百川的城市。三千年的历史，六朝故都，这里荟萃了自元明清以来的中华文化，荟萃了众多名胜古迹和人文景观。
    这里汇聚了八方来客，宗教、文化、语言在这里融合，兼容并蓄。如果想准确的描绘出北京的模样，无异于痴人说梦，北京在红宫墙外的宁静小路上，在胡同儿的转弯拐角儿，在国贸的匆匆路旁，也在未名湖边的石砖小径。
    只有用心去感受，去聆听，才能听到北京的内心独白。 在我的心里，北京表面上它是现代大都会，但是内心却有抹不去的古朴和怀旧。闲庭信步在逐渐少去的胡同里，走进那热气腾腾的涮肉店，那才是真正的北京。
     有许多著名的学府如清华、北大等也汇聚于此，可以漫步校园中想象朱自清、胡适等昔日大师在校任教时的情景。 还有许多闻名遐迩的自然景观，如红叶迷人的香山公园、竹林遍地的紫竹院、环境幽雅的玉渊潭……","type"=>2,"picture"=>"img/beijing.jpg"),
	 array("id" => 311, "name" => "北京市", "description" => "北京，中国首都。每个人心中，都有一个“我爱北京天安门”的北京情结，都曾梦想着生活在传说中的紫禁城；梦想着穿梭在王朔笔下的胡同和大院;
	 也梦想着爬上万里长城，大喊：我是好汉！在每个人心中，都一个人属于自己的北京。 北京是一座包容万象、海纳百川的城市。三千年的历史，六朝故都，这里荟萃了自元明清以来的中华文化，荟萃了众多名胜古迹和人文景观。
    这里汇聚了八方来客，宗教、文化、语言在这里融合，兼容并蓄。如果想准确的描绘出北京的模样，无异于痴人说梦，北京在红宫墙外的宁静小路上，在胡同儿的转弯拐角儿，在国贸的匆匆路旁，也在未名湖边的石砖小径。
    只有用心去感受，去聆听，才能听到北京的内心独白。 在我的心里，北京表面上它是现代大都会，但是内心却有抹不去的古朴和怀旧。闲庭信步在逐渐少去的胡同里，走进那热气腾腾的涮肉店，那才是真正的北京。
     有许多著名的学府如清华、北大等也汇聚于此，可以漫步校园中想象朱自清、胡适等昔日大师在校任教时的情景。 还有许多闻名遐迩的自然景观，如红叶迷人的香山公园、竹林遍地的紫竹院、环境幽雅的玉渊潭……","type"=>2,"picture"=>"img/pic1.jpg"),
	 array("id" => 311, "name" => "北京市", "description" => "北京，中国首都。每个人心中，都有一个“我爱北京天安门”的北京情结，都曾梦想着生活在传说中的紫禁城；梦想着穿梭在王朔笔下的胡同和大院;也梦想着爬上万里长城，大喊：我是好汉！在每个人心中，都一个人属于自己的北京。 北京是一座包容万象、海纳百川的城市。三千年的历史，六朝故都，这里荟萃了自元明清以来的中华文化，荟萃了众多名胜古迹和人文景观。
    这里汇聚了八方来客，宗教、文化、语言在这里融合，兼容并蓄。如果想准确的描绘出北京的模样，无异于痴人说梦，北京在红宫墙外的宁静小路上，在胡同儿的转弯拐角儿，在国贸的匆匆路旁，也在未名湖边的石砖小径。
    只有用心去感受，去聆听，才能听到北京的内心独白。 在我的心里，北京表面上它是现代大都会，但是内心却有抹不去的古朴和怀旧。闲庭信步在逐渐少去的胡同里，走进那热气腾腾的涮肉店，那才是真正的北京。
     有许多著名的学府如清华、北大等也汇聚于此，可以漫步校园中想象朱自清、胡适等昔日大师在校任教时的情景。 还有许多闻名遐迩的自然景观，如红叶迷人的香山公园、竹林遍地的紫竹院、环境幽雅的玉渊潭……","type"=>2,"picture"=>"img/beijing.jpg"),
	 array("id" => 311, "name" => "北京市", "description" => "北京，中国首都。每个人心中，都有一个“我爱北京天安门”的北京情结，都曾梦想着生活在传说中的紫禁城；梦想着穿梭在王朔笔下的胡同和大院;也梦想着爬上万里长城，大喊：我是好汉！在每个人心中，都一个人属于自己的北京。 北京是一座包容万象、海纳百川的城市。三千年的历史，六朝故都，这里荟萃了自元明清以来的中华文化，荟萃了众多名胜古迹和人文景观。
    这里汇聚了八方来客，宗教、文化、语言在这里融合，兼容并蓄。如果想准确的描绘出北京的模样，无异于痴人说梦，北京在红宫墙外的宁静小路上，在胡同儿的转弯拐角儿，在国贸的匆匆路旁，也在未名湖边的石砖小径。
    只有用心去感受，去聆听，才能听到北京的内心独白。 在我的心里，北京表面上它是现代大都会，但是内心却有抹不去的古朴和怀旧。闲庭信步在逐渐少去的胡同里，走进那热气腾腾的涮肉店，那才是真正的北京。
     有许多著名的学府如清华、北大等也汇聚于此，可以漫步校园中想象朱自清、胡适等昔日大师在校任教时的情景。 还有许多闻名遐迩的自然景观，如红叶迷人的香山公园、竹林遍地的紫竹院、环境幽雅的玉渊潭……","type"=>2,"picture"=>"img/pic1.jpg"),
	 array("id" => 311, "name" => "北京市", "description" => "北京，中国首都。每个人心中，都有一个“我爱北京天安门”的北京情结，都曾梦想着生活在传说中的紫禁城；梦想着穿梭在王朔笔下的胡同和大院;也梦想着爬上万里长城，大喊：我是好汉！在每个人心中，都一个人属于自己的北京。 北京是一座包容万象、海纳百川的城市。三千年的历史，六朝故都，这里荟萃了自元明清以来的中华文化，荟萃了众多名胜古迹和人文景观。
    这里汇聚了八方来客，宗教、文化、语言在这里融合，兼容并蓄。如果想准确的描绘出北京的模样，无异于痴人说梦，北京在红宫墙外的宁静小路上，在胡同儿的转弯拐角儿，在国贸的匆匆路旁，也在未名湖边的石砖小径。
    只有用心去感受，去聆听，才能听到北京的内心独白。 在我的心里，北京表面上它是现代大都会，但是内心却有抹不去的古朴和怀旧。闲庭信步在逐渐少去的胡同里，走进那热气腾腾的涮肉店，那才是真正的北京。
     有许多著名的学府如清华、北大等也汇聚于此，可以漫步校园中想象朱自清、胡适等昔日大师在校任教时的情景。 还有许多闻名遐迩的自然景观，如红叶迷人的香山公园、竹林遍地的紫竹院、环境幽雅的玉渊潭……","type"=>2,"picture"=>"img/beijing.jpg"),
	 array("id" => 311, "name" => "北京市", "description" => "北京，中国首都。每个人心中，都有一个“我爱北京天安门”的北京情结，都曾梦想着生活在传说中的紫禁城；梦想着穿梭在王朔笔下的胡同和大院;也梦想着爬上万里长城，大喊：我是好汉！在每个人心中，都一个人属于自己的北京。 北京是一座包容万象、海纳百川的城市。三千年的历史，六朝故都，这里荟萃了自元明清以来的中华文化，荟萃了众多名胜古迹和人文景观。
    这里汇聚了八方来客，宗教、文化、语言在这里融合，兼容并蓄。如果想准确的描绘出北京的模样，无异于痴人说梦，北京在红宫墙外的宁静小路上，在胡同儿的转弯拐角儿，在国贸的匆匆路旁，也在未名湖边的石砖小径。
    只有用心去感受，去聆听，才能听到北京的内心独白。 在我的心里，北京表面上它是现代大都会，但是内心却有抹不去的古朴和怀旧。闲庭信步在逐渐少去的胡同里，走进那热气腾腾的涮肉店，那才是真正的北京。
     有许多著名的学府如清华、北大等也汇聚于此，可以漫步校园中想象朱自清、胡适等昔日大师在校任教时的情景。 还有许多闻名遐迩的自然景观，如红叶迷人的香山公园、竹林遍地的紫竹院、环境幽雅的玉渊潭……","type"=>2,"picture"=>"img/pic1.jpg"),
	 array("id" => 311, "name" => "北京市", "description" => "北京，中国首都。每个人心中，都有一个“我爱北京天安门”的北京情结，都曾梦想着生活在传说中的紫禁城；梦想着穿梭在王朔笔下的胡同和大院;也梦想着爬上万里长城，大喊：我是好汉！在每个人心中，都一个人属于自己的北京。 北京是一座包容万象、海纳百川的城市。三千年的历史，六朝故都，这里荟萃了自元明清以来的中华文化，荟萃了众多名胜古迹和人文景观。
    这里汇聚了八方来客，宗教、文化、语言在这里融合，兼容并蓄。如果想准确的描绘出北京的模样，无异于痴人说梦，北京在红宫墙外的宁静小路上，在胡同儿的转弯拐角儿，在国贸的匆匆路旁，也在未名湖边的石砖小径。
    只有用心去感受，去聆听，才能听到北京的内心独白。 在我的心里，北京表面上它是现代大都会，但是内心却有抹不去的古朴和怀旧。闲庭信步在逐渐少去的胡同里，走进那热气腾腾的涮肉店，那才是真正的北京。
     有许多著名的学府如清华、北大等也汇聚于此，可以漫步校园中想象朱自清、胡适等昔日大师在校任教时的情景。 还有许多闻名遐迩的自然景观，如红叶迷人的香山公园、竹林遍地的紫竹院、环境幽雅的玉渊潭……","type"=>2,"picture"=>"img/beijing.jpg"))
);
echo json_encode($fruits);

?>