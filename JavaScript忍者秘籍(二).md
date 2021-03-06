JavaScript忍者秘籍(二)
	本书的话介绍的内容主要有：
- 函数部分
1. 理解函数：定义和参数 
2. 函数进阶：理解函数调用  
3. 精通函数：闭包和作用域
4. 未来的函数：生成器和Promise！

- 对象部分
1. 面向对象和原型
2. 控制对象的访问
3. 处理集合
4. 正则表达式
5. 代码模块化

- 浏览器部分
1. DOM
2. 事件
3. 浏览器开发！

其实本书的质量总的来讲还是蛮高的，因为不仅仅是看目录的结构，而是对作者以及JavaScript书籍选择的时候也花了很多时间！ jQuery之父写的书籍 质量应该是没话说的！

第一章节： 无处不在的JavaScript
	总的来讲刚开始的时候，本书阐述了JavaScript的技术演进史，以及JavaScript在不断更迭的过程中特别是ES6这个版本中所出现的一些高级特性的简单介绍！
	其次讲到了JS是如何发展的，进一步引申到通过转译器对开发者们的影响，让我们在开发中能够使用未来的JS而不会因为特性原因导致兼容不了，因为有 转译器！
	 在这讲到了对应的 理解 浏览器 通过架构图的描述 向我们阐述了新时代的浏览器架构和Nodejs的异同，并且现代化开发的前端工程师已经不仅仅是专注于浏览器的开发！ 还能够更加深入的对其服务器端进行开发！
	 后面讲到了最佳实践，分为了三点，如下所示：
1. 调试技巧
2. 测试
3. 性能分析			
简单的讲解了作者对于这块的理解和相对应的指导！
之后又从浏览器说到了跨平台的开发！从传统的浏览器端 到移动端 到客户端 前端工程师快速抢占视觉层面的应用开发！

	
第二章节：运行时的页面构建过程
		开头的时候简单地阐述了对于JS的探索从Web应用开始，到对应的Web生命周期，以一副前后端交互的架构图清晰明了的让我们明白了用户的一系列操作背后的巧妙的做了些什么，从开发者角度更加深入的了解Web应用的生命周期具体是什么？
		从用户打开页面到关闭页面经历了什么，从整个流程上面来看也许没有什么，但是对于一个web开发者来讲理解软件背后的原理是至关重要的！
		
		页面的构建阶段：从HTML的解析到DOM的构建，对应代码层面上的执行流程和页面的构建又是一种什么样的联系呢？
		构建好页面之后，用户的一系列交互操作所触发的事件又是如何被处理的呢？这里有着重强调了JS的单线程以及对事件的处理的简单介绍，从实践队列到时间处理器的简单讲解，最后的话是引申出后面将会讲解的事件循环机制带来了什么？
		接下来讲事件驱动机制是异步的，事件可能会以难以预计的时间和顺序发生，我们对于事件的处理是以处理函数的形式存在的，并且对应的处理函数是异步的（如下类型的事件会在其他类型的事件中发生）：		
- 浏览器事件：当前页面加载完成或者说是无法加载时触发！
- 网络事件：来自服务器的响应， Ajax事件和服务器端事件
- 用户事件：鼠标单击 鼠标移动 键盘事件
- 计时器事件： timeout时间到期后触发的时间间隔！	

因此可以毫不客气的说道 JS中的内容大部分都是对事件的处理操作！

事件处理器？ 就是对应事件被触发后我们希望执行的函数 叫做 事件处理器！ 
那么其中我们告诉浏览器我们处理特定事件的方式的过程，就叫做注册事件处理器！

对应的 window.onload = ()=>{//TODO} 注册了一个事件处理器 在Window.onload时间上面！ 页面构建好之后 就会触发处理器的执行！

那么说实话这种方式真的好吗？ 我不推荐你使用这种简单的将函数赋值给特殊属性！
原因如下：
1. 某一个事件只能够注册一个事件处理器（这样会覆盖掉之前使用这种方式创建的事件处理器！)
2. 解决办法：使用addEventListener添加事件监听器的方式 注册尽可能多的事件处理器！ 一般的话事件名是去掉on的 第二个参数就是事件处理函数
3. 那么对应的事件又是如何被处理的呢？
    1. 事件发生的时候 浏览器调用相应的事件处理器，单线程的执行模型，只能同时运行一个事件，因此后面的事件只能等当前的事件处理器完成后再依次执行任务！
    2. 因此对应的事件处理器也会被依次添加到事件队列中，等待执行器的处理！
    3. 事件循环一直都在运转，直到用户关闭Web应用
    4. 对应的DOM是这样发生变化的，页面构建好之后，用户交互触发事件 事件循环调度事件的执行 执行器执行之后 事件操作改变DOM 页面构建！
    5. JS代码动态修改DOM的行为是Web应用动态行为的基础！

这里讲完之后，有几个问题值得我们深思的，如下所示：
1. 客户端Web应用的两个生命周期阶段是什么？
2. 相比将事件处理器复制给某个特定元素的属性上面，使用addEventListener方法来注册事件处理器带来的优势在哪里？
3. JS引擎能够同时处理多少个事件？
4. 事件队列中是以什么样的顺序去处理的！



第二部分：理解函数
- 我将会学习到什么？  调用函数，函数执行过程中隐式传递参数的来龙去脉！
- 闭包加深对函数的理解，作用域！
- 生成器对异步代码的影响！

1. 定义与参数
		为何如此重要，JS中的函数被称之为一等功名，和对象有着同等地位的函数，本质上其实也是对象！但是函数的应用场景应该是最多的，后面随着ES6的出现给函数带来了很多的变化，不仅如此函数也是JS中的最最最基础的内容，因此更好的理解函数是我们进阶JS不能错过的！
- 回调函数那种情况下会被同步调用，那种情况下异步调用呢？
- 剪头函数与函数表达式的区别？
- 为什么需要在函数中使用默认参数？

其实以上三个问题都会在书中得到一一的解答，我们拭目以待！
- 主要模块单元
- JS代码是在页面的构建阶段执行的！

既然说函数也是对象，那么作为对象最基本的功能特性体现在哪里？
1. 可以通过字面量创建 
2. 可以复制给变量 数组项 或者其他对象的属性！
3. 可以作为参数传递给函数使用！
4. 作为函数的返回值
5. 动态创建和分配的属性！
	
不仅如此普通对象能够做的，函数依然可以做！ 这就是魅力所在！并且函数特别的地方就是函数本身是可以被调用的！
	不仅如此还引申出了，函数是编程的概念，虽然这个特性并不是特别的强烈，但是这样做会是的代码更加容易测试，扩展和模块化！
	还有就是，如果说函数里面传递函数的话，并且被传递的函数在之后特定的时间点被执行，我们第一想到的概念就是回调函数！
	
1.2回调函数
	每当我们建立一个将在随后调用的函数，无论是在时间处理阶段通过浏览器还是通过其他代码，我们都是在建立一个回调，属于来源于一个事实，即在执行过程中，我们建立的函数会被其他函数在稍后的一个合适的时间点， “再回来调用！”
	
	在我们使用排序进行比较的时候，就可以穿入对应的比较器进行比较操作，对应的比较器其实就是一个回调函数！
	
函数作为对象的乐趣，我们不仅仅是可以在创建新对象的时候为其对象分配一个新的属性的同时，作为函数其实也可以这么做！
```JavaScript
  Let  wieldSword = function(){};
 wieldSword.swordType = ‘Katana’; //其事就是创建新函数的时候为其新函数分配一个新的属性！
```	
- 存储函数
介绍到了存储函数，某个事件上需要调用的回调函数集合，并且存储的事元素唯一的函数集合！
	使用数组存储的话，需要循环数组进行比对操作，如果说数组内的元素与要存储的函数不相同的话则添加在数组中，总的来说性能并不是很好！
	如果是使用函数的属性和对象的特性还是可以做的！

```JavaScript
	Let store = {
		NextId:0,
		Cache:{},
		Add(fn){
			if(!fn.id){
				fn.id = this.NextId++;
				This.cache[fn.id] = fn;
				Return true;		
			}
		}
	};
```
	传入的函数如果没有id属性值的话就将对应的id加一并且将对应的函数引用缓存在对应的store的cache的数组中！	
	其实对应的 fn.id就为当前的函数添加了一个id属性，为了更好的标识id！

- 自记忆函数
		其实本身概念还是比较好理解的，通过记忆化(构建函数的处理过程)能够记忆上次的计算的结果！
		这样算出来的结果就起到了性能优化的作用，避免了重复而复杂的计算！
		那么讲自记忆函数的意义在哪里？ 其实就可以引申到那种复杂计算的应用场景，比如说 通过字符串生成MD5值。就是一种比较复杂的计算方法！
		话又说回来，其实自记忆函数本身就是一个普通的函数，只不过内部有一个结果缓存，保存函数每次计算的结果！
```javascript
	Function isPrime(value){
		If(!isPrime.answers){
			IsPrime.answers = {};
		}
		If(isPrime.answers[value] !== undefined){
			return isPrime.answers[value];	
		}
	    	Var prime = value !==0 && value !== 1;
		For(var I = 2,I<value ;I++){
			if(value%2===0){
				prime = false;break;
			}
		}
		Return isPrime.answers[value] = prime; 		
	}
```
	 其实从代码上来看还是比较好理解的，先看是否有缓存没有缓存的话新建缓存！传入的的value对应的值不为undefined的话 则直接返回！
	对应的prime为Boolean类型 对应的值有value确定 value不为0并且不为1
	将value进行遍历操作，如果说对应的value为偶数的话那么改变prime的值！
	并且将对应的缓存数组value的值设置为boolean类型的 prime！
	
那么对应的自记忆函数的特点如下所示：
1. 用户会乐意于性能收益
2. 但是对应的缓存必然会牺牲内存
3. 但是对应的该类问题，比较难以测试或者说估计算法复杂度
	
那么对应的函数是如何被定义的呢？
1. 函数定义和函数表达式最常用
2. 箭头函数
3. 构造函数
4. 生成器函数 创建不同于普通函数的函数 该函数能够退出再重新进入 在这些在 进入之间保留函数內变量的值！  
5. 理解这边的集中函数不同的方式其实是很重要的，因为函数的创建方式很大程度上的影响了函数可被调用的时间，函数的行为以及函数可以在那个对象上面被调用！

- 函数声明和函数表达式
	其中对函数表达式作了进一步的讲解，其中最主要的也是最关键的一点就是：
1. 作为一个单独的JavaScript语句，函数声明必须独立！（也可以被包含在其他函数或者说是代码块中！） 其中函数里面声明函数在别的语言看来也是一种比较有意思但是JS中却又非常正常的现象！
2. 当然作为函数表达式在JS的运算过程中也屡见不鲜！
3. 在函数声明的时候函数名是必不可少的，但是在表达式当中的话对应的函数名是可有可无的！
为什么？
	因为函数声明式独立的，要被引用的话必须是具名的，不像函数表达式，函数表达式的话是作为表达式存在的 比如说我们写一个函数表达式复制给对应的变量那么对应的变量 该变量便具有函数的功能行为！
	IIFE立即调用函数表达式也是作为函数表达式而存在的！
	对应的IIFE可以模拟JS中的模块化！
	
至于说为什么IIFE的语法给是这么奇怪呢？ 其实这就是JS纯语法层面上的事情了，因为如果说去掉一个括号的话那么对应的 就是被JS解释器解析为在处理一个声明函数 但是对应的声明函数只有函数体 是没有用的 需要被调用！


- 箭头函数	
 	箭头函数的出现让函数变得更加简洁，对应的写法特别的简洁： 
	最简介的形式，表现为：
	param	=> expression 其实就是 对应的参数 箭头指向对应的运算表达式！ 不仅如此 箭头指向的地方 如果只是简单的表达式可以不写花括号！ 具体的一些特别细的细节 可以参考 MDN！

	对应的参数的实参和形式参数的区别，如下所示：
1. 形式参数是我们声明或者说定义参数的时候所列举的变量
2. 实际参数是我们调用函数时所传入的参数！	

实际参数大于形式参数的话对应的额外的参数是不起作用的，如果说形式参数大于实际参数那么对应的实参则会被设置为undefined！
还有就是形式参数列表的话 为arguments 一个类数组而存在的！

- 剩余参数
对应的还有剩余参数，使用...parameters 这样表示，表示具名形式参数之后的剩余的参数集合！

- 默认参数
默认参数其实很好理解，就是对应的在函数声明或者定义的时候，如果没有传入对应的值那么就使用默认的参数作为缺省值！
1. ES6之前就是使用 三元运算符的形式进行默认值的定义
2. ES6之后的话，在函数的形式参数列表中用赋值号进行赋值 表示当该参数没有被赋实参的时候 使用默认值！



对函数基本的一些概念做了总结之外还提供了一些基本的练习，给我们学习！Kindle电子版的不够清晰，具体的可以通过实体书籍进行查看！

- 理解函数调用 
其中涉及到了什么内容？ arguments和this
其中还是比较好理解的arguments和this 一个实参列表，一个是调用函数的上下文对象！ 两者都会被静默的传递给函数，并且可以想被显示声明的参数一样被正常访问！

	虽然两者虽然比较好理解，但是在应用过程中容易出错，特别是this，因此需要好好的针对这些内容进行学习！
1. 为什么this表示函数上下文？ 
2. 函数和方法又有什么区别？
3. 构造器显示的返回一个对象会发生什么？

但是对应的this就像方方老师所说的那样，call的第一个参数就是this的表意所在！
	其中对应的arguments就不过多阐述了，对应的this与我个人而言是非常感兴趣的地方！
	this被称之为函数上下文，其实这个概念器显示来源于Java的，通常指向定义当前方法的类的实例！
	那么在JS中将一个函数作为method调用仅仅是函数调用的一种方式，事实上this参数的指向不仅是由定义函数的方式和位置决定的，同时还受到了函数调用的方式的影响！
	那么对应的真正理解this参数是面向对象编程的基础！
	
	现在最关键的就是理解this参数以及函数的上下文是如何建立起来的！ 这点是非常重要的！		
	那么一般的函数是在那种情况下被调用的呢？
1. 作为一个函数 直接被调用！
2. 作为方法 绑定在对象上面 作为method！
3. 作为构造函数使用 返回对应的构造器的实例对象！
4. 通过apply或者是call方法被调用！

作为一个函数被调用，这么说为了让我们更好的和其他三种方式区别开来！
作为函数被调用分为两种方式：
1. 使用圆括号运算符调用一个函数
2. 函数表达式不是作为一个对象的属性存在时 也是属于这种函数调用类型！（作为对象属性的调用方式 叫做方法！）
 
一般在这种情况下，this的值分为两种：
1. 严格模式下：this为undefined
2. 非严格模式下为全局对象，但是对应的全局对象分为浏览器端和服务器端的全局对象 分别为 Window 和 global！
3. 对应的为什么会这么划分呢？ 因为JS如果说不开启严格模式的话 对应的会出现一些怪异情况！


- 作为方法被调用：
1.  为什么作为方法，而是因为函数的调用是作为对象的属性被调用的因而叫做方法，对应的方法内部可以通过this访问到对象主体，这样一来的话，便可以知道：当函数被作为属性，被作为对象的属性调用的时候该对象就会成为该函数的上下文，与此同时函数内部可以通过参数访问到！
2. 其实这样的方式也是JS面向对象的主要方式之一！
3. 其实不难发觉其实对应的函数调用和方法调用其实有类似的，就是函数也是存在于对象之中的，当然这个另当别论，因为还的考虑严格模式！

对应的即使对象中的属性对应的属性值是函数的引用，通过对应的对象来调用函数 得到的this依然是调用函数指定的对象！ 

- 作为构造函数被调用
1. 对应的构造函数其实并没有什么特别之处，其对应的函数声明和函数表达式可以很容易的构造对象！ 
2. 例外的就是箭头函数 后面会对其进行说明 箭头函数里面没有this！
3. 对应的使用构造函数的话 需要使用关键词 new   但是与此同时请不要与函数的构造函数(new Function(parameter,function body))与普通的构造函数混为一谈！
4. 对应的部分的所说到的构造器 用来创建对象实例的函数！
5. 对应的 如果说构造函数中本身有返回值（例如说数字1）的话，则会返回他应该返回1的，如果说使用到了关键词 new 的话，那么对应的构造函数会返回构造函数所构造出来的对象！
6. 但是如果说返回一个对象的话{name:18}，那么对应的即使是使用了关键词new 那么返回的对象也依然是之前定义的对象！{name:18}

- 总结：
    - 如果说构造函数返回一个对象，那么对应的该对象作为整个函数表达值返回，而传入的构造器函数的this将被丢弃！
    - 如果说构造器返回的是非对象类型，则忽略返回值，返回新的对象！
    - 正因为构造器的特殊性，我们需要更加区别对待！
    - 对应的：使用构造器就是为了更好的将面向对象模式应用在开发当中！
    - 对应的还有apply方法和call方法，通过我们手动指向this的值！从上面的那个例子中，可以明白对应的时间回调函数中的上下文对象是触发事件的对象！ 对应ele绑定的事件监听器 那么对应的也就是ele对应的元素了！ 
    1. 对应的使用apply和call不同的就是对应的第二个参数apply传入的是数组而call是参数！
    2. 与此同时，使用apply和call不仅仅是手动指向了函数上下文，同时也产生了函数上下文的this和arguments！
    3. 强制指定回调函数的函数上下文
    4. 其中通过已小段代码跟我们阐述了对应的知识点，讲到了使用for和forEach存在的异同，如果说习惯了函数式编程的话forEach方法比for更加简洁也更加的提升了复用性！
    5. forEach便利函数将对应的每个函数传给回调函数进行处理操作！与此同时将当前的元素作为回调函数的上下文！

代码示例如下：
Function forEach(list,callback){
	For(let I=0,I<list.length;I++){
		//列表中的每一项作为当前回调的上下文对象 
		callback.call(list[i],n);
	}	
}
	其实不难发现forEach就是这样的，第一个就是对象数组，第二个就是回调函数，回调函数每次的上下文对象都有所不同，是因为每次的上下文对象都是从数组中遍历出来的一项！
	但是其实以上的代码，也考虑的情况有限，因为可能出现一下这种情况：如果说传入的第一个参数不是对象数组怎么办？ 如果说调用这需要中断程序应该怎么办？ 其实也就是不能够细粒度的控制程序的运行情况！
	
	解决函数上下文的问题：
1. 使用箭头函数来解决
2. 使用bind方法来避免这个问题！

```js
	<button I’d=‘Test’>Click me!</button>
  	Function Button(){
		This.clicked = false;
		//因为是箭头函数 没有函数本身的this（Button实例对象） 从定义时的所在函数继承上下文 因此指向按钮对象！
		This.click = ()=>{
			This.clicked = true;
			Assert(button.clicked,’The button has been clicked!’);
		}
	}
    Var button = new Button(); var element = document.getElementById(‘Test’);
   Element.addListener(‘Click’,button.click);	
```	
	还有一种比较奇怪的事情，就是如果说箭头函数如果说是以对象字面量的形式存在的话，那么对应的 那么对应的对象就难以跟踪！
	因为如果说在全局代码中定义对象字面量，并且对应的对象字面量中定义了箭头函数，那么对应的对象字面量中的this指向全局的window对象！

	使用对象的bind方法，其实就是 函数可以访问bind方法并且返回一个新的函数 该函数与使用bind的函数体一样，只是新函数被绑定在指定的对象上面！


1. 精通函数：闭包和作用域
    1. 使用闭包简化代码
    2. 使用执行上下文跟踪JS程序的执行
    3. 使用此词法环境跟踪变量的作用域
    4. 理解变量的类型
    5. 探讨闭包的工作原理
	
其实对应的闭包是JS中的显著特征，通过对应的闭包特性可以减少代码量和复杂度添加高级特性，与此同时完成不太可能完成的功能！
如果说没有闭包会怎么样？
1. 事件处理
2. 动画等包含回调的任务
实现起来非常麻烦！对应的闭包带来的问题就是作用域等问题，因此与此同时需要好好了解作用域！
	如下是相关的知识点：
1. 一个变量或方法有几种不同的作用域？ 这些作用域分别是什么？
2. 如何定位标识符及其值？
3. 什么是可变变量？如何在JS中定义可变变量？

理解闭包：
1. 闭包允许函数访问并操作函数外部的变量，只要变量或函数存在于声明函数时的作用域内，闭包即可使函数能够访问这些变量或函数！
代码示例：
let a = 1;
Function outerFunction(){
	Assert(a===‘1’,’I can see the a!’);
}
OuterFunction();
同一作用域内定义的变量和函数 调用该函数可以看见并且访问同作用域的变量！其实对应的这就是一个闭包！

还有另外一种方式 
Let  outerValue = ‘Sam’;
Let later;
Function outerFunction(){
	let  innerValue = ‘Charlie’;
	Function innerFunction(){
		console.log(innerValue);
	}
	Later = innerFunction;
}	
Later(); //Charlie
其实总的来讲还是比较清楚的，就是对应的同级作用域中还维护了一个内部函数！ 与此同时将内部函数的引用复制给了全局变量！
因此我们直接调用全局变量 later会打印出对应的值！

案例来讲外部变量是不能够访问内容的内容的！ 其实对应的就创建出了一个闭包 （外部函数里面定义一个内部函数 此时的内部作用域就是一个闭包 内部函数访问外部函数內的变量 ！）！

其实就像一个泡泡 刚刚对应的内部函数一直存在，内部函数的闭包一只维护着函数作用域里面的变量！

与此同时对应的 每一个闭包的访问变量的函数都具有一个作用域链，作用域链包含闭包的全部信息！
虽然说闭包是非常有用的！但是不能够过度使用的，因为所有的信息都存在于闭包中的话，对应的信息都会存在于内存当中，直到不再使用的时候才会


其实对应的闭包可以通过隐藏具体的代码对外提供变量获取的方法！ 实现私有变量！
使用方法实现对私有变量的操作，并且将方法暴露出去，避免代码直接修改！
通过闭包屏蔽闭包内的一些变量！是的对应的变量更加的安全！

回调函数：需要在将来不确定的某一时刻异步调用的函数！ 通常在这种回调函数中我们需要经常频繁的访问外部数据！


通过执行上下文来追踪代码，对应的前面讲到了JS代码有两种类型，分别为：
1. 全局代码
2. 函数代码
那么可以知道对应的代码是如何执行的！
JS单线程的原因我们可以知道，在某个特定的时候，只能够执行特定的代码，一旦发生函数调用，当前的函数执行完成后，函数执行上下文必须停止，新开一个函数执行上下文 执行当前函数的代码，函数执行完毕之后，销毁当前的执行上下文，与此同时重新回到调用函数的位置的执行上下文！

执行上下文栈的行为！ 
	一个后进先出的数据结构，从函数开始执行的时候是从全局执行上下文的环境下开始的！ 每当有函数调用 停止函数执行上下文 创建新的函数执行上下文 执行完毕之后 销毁执行上下文 释放内存！ 继续回到函数调用的地方的执行上下文 然后再一次往下执行！ 

	如果说想要深入理解函数的调用过程可以参考Chrome里面的call stack！

使用词法环境跟踪变量的作用域！
	词法环境其实就是JS引擎内部用来跟踪标识符与特定变量之间的映射关系！词法环境是JS作用域的内部实现机制 通常称之为作用域！
	之前在ES6的初次版本中，词法环境只能够与函数相关联对应的变量是存在于函数作用域中！  后面例如块级作用域也是后面ES6中被修复的！
	对应的JS引擎是如何查找变量的值，也是从最近变量的作用域开始查找，其实比较好理解的事， 遵循 就近原则 ！
 	试想一下 如果说直接从全局作用域开始的话，如果说存在的变量比较少还行，如果说全局作用域内部存在的变量及其对应的函数作用域繁多，那么查找变量的时间成本太高，效率也就十分的低下！
	
	其实对应的变量可变性，分为两类分别为const一组，let和var一组，对应的const如果说是基本类型的值的话，只能够复制一次，我们一般做 常量使用 与此同时 常量的命名也是全部大写，但是如果说const 定义的量的值 为对象类型的话，可以直接对对象进行修改，不能够直接新建的对象来赋值给变量！

	对应的词法环境其实令人印象深刻，JS中的for循环里面的块级作用域，使用var定义的变量会忽略块级作用域！
		
	也就是说for循环里面定义(使用var定义)的变量 在for循环外面依旧可以访问到变量的值！
	但是对应的let和const可以定义具有块级作用域的变量，使得JS变得正常起来！
其实话又说话来，JS里面的函数作用域其实也就是闭包！ 如果说从JAVA的语法中来讲！
	对应的标识符注册过程可以在P112中予以体现！ 声明之前调用函数，确实让人觉得特别奇怪，至于说易用性，其实我倒是觉得见仁见智吧！（个人还是比价推崇使用约束来帮助我们写更加健壮的代码才是比较不错的！）
	至于说为什么能够这么写 和对应的JS注册标识符的过程相关！
当前环境是否是函数环境  是：创建arguments对象和函数参数 否：下一步
是环境函数还是全局环境？ 是：注册其他函数外面的函数声明 否：下一步
当前环境是块级作用域吗？ 是：注册当前块级作用域中以let  const声明的变量 否：注册函数作用域外面以var声明的对象，以及在块级作用域外面以let const生命的对象！

 
其实对应的私有变量的警告：通过函数访问私有变量，并非通过对象访问，因为在JS中是不能够防止我们将对象中创建的属性复制给另外一个对象的！ 对应的在JS中是没有真正的私有对象属性，但是可以通过闭包实现一种让人容易接受的 私有 变量的方案！

其实对应的 闭包的出现其实就是为了更好的隐蔽一些细节，尽量暴露少的有用的一些信息！ 但是与此同时闭包的过度使用也会导致内存的占用偏高！ 闭包中包含多个对应的属性和信息 需要额外的内存开销！


未来的函数：生成器和Promise
- 通过生成器让函数持续执行
- 使用Promise处理异步任务
- 使用生成器和Promise书写优雅代码
Promise对象其实就是一个占位符，对应的暂时替代那些现在还没有计算出来的但是未来会计算出来的值，对于多个异步操作来说，使用Promise是非常有好处的！
那么对应的以下几个问题是值得深思的：
1. 生成器函数的主要用途是什么？
2. 为什么说对于异步的处理，Promise要比简单的回调函数要好呢？	
3. 使用Promise.race来执行很多长期执行的任务时，promise最终会在什么时候变成resolved状态？ 他什么时候会无法变成resolved的状态？

对应的内容，使用我们平常的方式进行了处理，例如说使用同步的方式请求JSON数据，使用的trycatch来处理异常！看着虽然说没有多大的问题，但是恰恰是因为请求数据，从服务器中获取数据是一个比较耗时的操作，对应的在对于单线程的JS来讲的话，对应的UI渲染就会暂停操作！ 此时就出现了严重的视觉卡顿效果，这恰恰是我们不想看到的，于是有了对应的异步操作！
首先使用回调函数来解决这个问题，但是问题又来了 “回调地狱”！
为什么这么说呢？ 	虽然说解决了对应的性能问题，不会导致UI渲染卡顿，但是对应的每一个操作对应一个回调函数，并且是回调函数中的回调函数，这种风格的代码可能让我们处理起来会比较混乱！

这段代码的混乱逻辑确实让人看起来有点头疼，那么是否又有什么优雅的方式来解决这个问题？
1. 生成器函数
2. Promise
	
生成器函数生成一组值的序列，每个值的生成都是基于每次请求，并且不同于标准函数那样直接生成！ 函数內使用yield生成独立的值！ 对应的调用生成器会生成一个迭代器！迭代器对外暴露了一个方法叫做next方法！ 用来向生成器请求值从而控制生成器！  其中对生成器做了全方位的讲解，但是现在的异常处理基本上都是Promise来对异常进行处理！ 后面的一些异步处理方式都是基于Promise进行封装的！

前文中已经提到了Promise其实就是一个占位符，能够对我们最终能够的值异步计算结果的一种保证！

对应的Promise传入两个函数作为构造器使用，一个是resolve函数，一个是reject函数！一个成功回调一个失败回调！
在我们使用then的时候（前提是这个方法返回了对应的Promise对象），需要传入两个函数，作为成功和失败的回调！

最后在结尾处也可以catch	处理对应的函数！

那么话又说回来，异步解决了什么问题？ 
比较好理解的就是，解决了性能问题，因为JS是单线程的如果说同步代码的话，从上往下的执行流程会导致对应的执行阻塞，回给对应的UI渲染出现阻塞效果！

但是回调对应的关于错误的处理涉及的可能没有那么好，因此加上潜逃的回调函数形成的回调地狱导致编写异步处理代码的复杂度不断的增加，处理起来也非常的麻烦！


深入Promise的过程中，先是从pending开始，一旦对应的resolve执行完成之后，就会进入对应的fulfilled状态，在该状态上我们能够成功获取到承诺的值！
对应的一旦执行了reject函数的话，就会进入到拒绝状态，他的状态都不能够在切换了！

对应的显示拒绝Promise的话，那么使之对应的就是reject总会被调用！
如果说需要隐式拒绝promise的话，对应的值需要在promise里面出现未被处理的异常就行了！

一般使用异步方法的话，都是使用Promise进行封装，返回Promise对象！

链式调用Promise
对应的使用promise的then之后 不仅仅是可以传入参数作为回调使用的同时，并且使用then方法之后还会再返回一个新的Promise对象！ 链式调用的原则就是 每次调用方法的同时 返回对象本身，因为方法的执行必须是在对象上面执行的！

使用then的第二个参数和对应的catch方法对其错误异常的捕获！ 错误的处理，对应的关于错误的处理是在尾部使用catch处理的，无论是第几个promise出现的错误，catch都能够很好的进行处理！

1. 并行处理Promise
如果说想要并行处理的话可以使用Promise.all方法，接受一个Promise数组，并且创建一个新的Promise对象，当所有的promise均为成功的时候则为成功状态，如果说其中任意一个promise失败的话，则该promise则为失败状态，最后使用catch对错误进行处理！
2. 使用Promise.race实现对应的promise竞态
如果说我们只关心promise数组中的第一个promise失败或者成功应该怎么做呢？使用Promise.race里面传入对应的Promise数组，并且生成新的Promise对象，对应的一旦数组中某一个promise被处理或者说被拒绝对应的返回的Prmise就同样会被处理或者说拒绝！

使用对应的promise和generator生成器集合，，让代码变的更加简洁友好！

面向未来的async函数 与对应的await与之配合使用！


- 深入钻研对象，强化代码
对应的本文中讲到了对应的内容有：
1. 探讨原型
2. 使用函数作为构造器
3. 使用原型扩展对象
4. 避免常见的问题
5. 使用继承创建类！
最开始的JS中的对象是使用原型开始的，不过现在的ES6面向对象的开发是基于Class的，以类的方法获取的实例对象，这是非常值得我们学习的！
- 一个对象是否可以访问特定的属性！
- 在JS中使用对象的时候，为什么圆形链这么重要
- ES6的关键词class是否改变了JS中对象的工作机制！
为了测试对应的对象是否具有某一特点的属性，可以使用操作符 in 来判断，对应的使用 对象 in 属性 来判断该对象是否能够访问属性！
	通过对应的视图图例，显示了对应的原型链的概念的引申！
每一个函数都有对应的原型对象
每一个函数的原型都具有一个constructor属性，该属性指向函数本身
constructor对象的原型设置原型创建的对象原型！


当将函数作为构造器函数的时候使用时，构造器的原型对象将被设置为函数的原型！
对应的如果说在构造函数内部，关键词this指向新创建的对象，所以在构造器内添加的属性直接在新的ninja实例上面，对应的访问方法的时候，就不需要遍历原型链！

对象与函数原型之间的引用关系是在对象创建时建立的，新创建的对象将引用新的原型，只能够访问price方法原来旧的对象保持着原有的原型，能够访问对应的就对象的方法！

对应的构造器使用的时候，创建出来的对象指向函数本身！
对应的对数据对象讲到了defineproperty的一些信息，还有的是对应的instanceOf进行了讲解操作！ 但是对应的要注意 JS是动态的在JS过程中的时候可以通过修改对象的内容改变操作符对应的结果！

ES6中的class 关于面向对象的一些概念知识点！

- 对应的ES6种的控制对象访问
1. 使用getter和setter控制访问对象的属性
2. 使用代理控制对象的访问
3. 使用代理解决交叉访问的问题！

对应的使用getter和setter访问属性值又有什么好处呢？
代理与getter和setter的主要区别是什么？
代理对象的常见问题是什么？ 

参与设计并且对应的制定规范能够更优雅的实现私有变量！
在JS中两种方式定义getter，和setter方法：
1. 通过对象字面两定义，或者在ES6的class定义！
2. 通过内置的Object.defineProperty！
其实对应的在我们调用方法的时候，访问属性的时候或者说修改赋值的时候，都是在隐式调用setter方法和对应的getter方法！

使用代理控制访问：
	使用代理 Proxy是我们通过代理控制对另一个对象的访问！ 使用代理的话可以容易的在代码中添加分析和性能度量，并且自动填充对象属性以避免讨厌的null异常，与此同时包装宿主对象，DOM用于减少跨浏览器的不兼容性！
	激活代理方法和getter和setter的是一致的，一旦执行交互，就会引式调用对应的getter和setter方法！

	
对应的从代理对象的几个应用场景来讲，其实代理还是挺方便的一种模式，但是与之同时在对普通对象的基础上功能的增强的同时，对应的也提高了内存的开销！	
其中在书中讲到的内容主要为：
1. 日志记录
2. 性能评估
3. 自动填充属性
4. 数组负索引



- 处理集合
1. 创建，修复数组
2. 使用复用数组函数
3. 使用Map创建字典
4. 使用set创建不重复的对象的集合！
那么对应的问题来了，让你学习对应的值是更加的深入：
1. 使用对象作为字典或Map的常见缺陷有哪些？
2. 在Map中，键值对可以是什么类型？
3. set成员必须是相同的类型吗？


对应的数组中常常用到的方法有哪些？ 数组中常用的操作如下图所示：
1. 遍历数组
2. 基于现有的数组元素映射出新的数组
3. 验证数组元素是否匹配指定的条件
4. 查找特定数组元素
5. 聚合数组 基于数组元素计算 计算数组元素之和！
对应的使用到了以下方法，分别为：
1. forEach
2. map
3. find
4. filter
5. reduce
对应的介绍到了MAP和Set的一些知识点  这才是非常关键的！ 可以针对性地去了解一下相关的知识！
	
之后的一些内容就是正则表达式的知识点了，对应的这里讲到了一些细节，可以针对性地去看一看，有必要的话可以写一篇博客！

其中后面讲到的内容包括代码的模块化！

其实在ES6之前的代码模块化还是经历过很多变革的！其中本文书中也有讲到过，这里总结一下：
1. 使用模块模式
2. 使用当前标准编写模块代码：AMD和对应的CommonJS
3. 使用ES6模块！
	
其实对应的将模块作为单位来组合代码做项目其实是一种比较合适的方式，不仅仅是在JS中，其实在很多别的语言中早就已经体现了，只不过JS在这一块做的没有那么早而已，直到不同的模式出现在大众面前，模式的更迭一些新的特性加入到ES6中才有我们现在用到的特性 import 和export！
对应的nodejs的模块化也是不同的！
对于浏览器需要使用到browserify 来做对应的模块化！
对应的指导后面的ES6提案出现才将这个局面逐步稳定下来！
问题：
1. ES6之前，可以使用什么现有的机制实现模块化
2. 对应的AMD和Commonjs模块化规范有什么区别？
	
其实对应的在ES6之前的JS，只有两种作用域，分别为全局作用域和函数作用域！没有介于两者之间的作用域，并且与此同时没有对应的命名空间和模块可以将功能进行划分操作，为了编写模块化代码JS开发者们不得不创造性的使用JS现有的语法特性！
	当对应的决定使用哪些功能的时候，我们需要谨记，该模块至少应该执行这些操作！
- 定义模块接口，通过接口可以调用模块的功能！
- 隐藏模块的内部实现！

使用对象，闭包和立即执行函数实现模块
	使用函数作为模块：
	调用函数将建立新的作用域，并且与此同时，在该作用域中定义的变量只能够在当前的函数可见，使用函数来屏蔽具体的代码实现细节，暴露出函数来获取数据！
	
模块模式：使用函数扩展模块，使用对象实现接口
	通过对应的立即执行函数 并且将返回一个对象 对象里面包含方法！ 该方法为暴露出来的接口！

利用立即执行函数 将对应的需要扩展的模块传入到里面，将拓展好的方法挂在到该模块上面！

对应的使用AMD和CommonJS模块化JS应用！
	为什么这么说呢，AMD和CommonJS是两个相互竞争的标准：
1. AMD：设计理念明确基于浏览器
2. CommonJS：面向通用的JS环境(Node.js服务端)

AMD提供名为define的函数，接受以下函数：
1. 新创建模块的ID，使用该ID，可以在系统的其他部分引用该模块！
2. 当前模块依赖模块ID列表！
3. 初始化模块的工厂函数，该工厂函数接收依赖的模块列表作为参数！
对应的AMD优点：
1. 自动处理依赖：无需考虑模块引入的顺序！
2. 异步加载模块
3. 同一个文件夹可以定义多个模块！
	
CommonJS
1. 其中对应的主要的应用在Node.js中比较多！
2. 基于文件的模块，每个文件夹只能够有一个模块！
3. 提供变量module，并且该变量具有属性exports，通过exports可以很容易的扩展额外属性，并且对应的将module.exports作为模块的公共接口！
对应的只有通过module.exports对象暴露的对象或者说函数才可以在模块外部访问！
但是对应的浏览器端是不允许这么做的，但是可以通过Browserify或者说RequireJS来实现！

	对应的设计到比较复杂的又提出了一种新的方案，叫做UMD！

后面ES6来了，有了对应的模块，更加的好用！
- 与CommonJS蕾丝，相对简单，并且是基于文件的！
- 与AMD类似，ES6模块支持异步模块加载！
对应的ES6的模块化机制最明显的就是，必须显示的使用标识符倒出模块，才能够外部访问该模块！ 标识符只能在模块內使用！
1. export 导出对应的模块
2. import 倒入模块标识符
怎么导出的就对应怎么导入，其实对应的将模块看作对象即可！
如果说导出的模块特别多的话 倒入的时候可以使用 * 并且 使用 as 表示指定具体的模块对象，具体的小模块需要通过 模块对象.模块 使用！
如果说每个文件只有一个模块则可以使用 export default moduleName！

对应的如果说导出的模块比较多的话，可以通过花括号引入所需的模块！

对应的export和import都可以使用重命名！
export {a as b};
Import b from ‘../‘
使用as 避免原有导出的 模块名冲突！

洞悉浏览器：
DOM操作：
1. 像DOM中插入HTML
2. 理解DOM的特性和属性
3. 获取计算样式
4. 处理频繁布局操作
实现高度动态化的Web应用的重要手段，就是通过修改DOM来响应用户的操作！

简单的DOM操作对应的代码也是特别的复杂！
- 为什么这些代码如此复杂？
- 既然这些库帮我们做好了，我们为什么还要理解它的实现？
- 了解实现细节并且将里面学到的技巧用到开发中！

几个问题？
1. 为什么诸如HTML之前需要在预解析页面中可以自动闭合的元素？
2. 使用DOM片段插入HTML的好处是什么？
3. 如何确定页面上隐藏元素的尺寸？

向DOM中插入HTML，该技术常常用在开发那些高度动态的网页，根据用户操作或者服务端返回的数据，修改UI展现！
1. 页面中插入任意HTML时以及操作并插入客户端模版的时候！
2. 拉去并注入从服务器返回的HTML！
如果说从头实现一套简洁的DOM操作方式，具体步骤如下：
- 将任意有效的HTML字符串转换为DOM结构
- 尽可能高效地将DOM结构注入到任意位置！
	

将HTML字符串转换成为DOM
	其实对应的用到了一个我们常常用到的属性，称之为：innerHTML
对应的转换步骤如下：
1. HTML字符串是合法并且有效的
2. 将它包裹在任意符合浏览器规则要求的闭合标签內
3. 使用innerHTML将这串HTML插入到一个需求DOM中！
4. 提取改DOM节点

1. 对应的预处理HTML字符串
2. 需要有良好的语义，并且对应的需要有良好的闭合

包装HTML： 需要对应的包装在某些容器元素中才能够被注入

DOM的属性和特性
1. 使用getAttribute和setAttribute进行获取和设置值！
其中上面DOM进行了详细的介绍 举了一些案例，需要的话可以回顾查看！

历久弥新的事件：
1. 了解事件循环
2. 使用计时器处理复杂任务
3. 使用计时器管理动画
4. 使用事件冒泡和委派
5. 使用自定义事件
其实对应的事件循环就是对应的事件调度方法，事件是如何执行的，这对于事件机制的JS来讲是非常重要的！
	
1. 为什么不能够保证定时器回调的时机？
2. setinterval定时器没3ms执行一次，而事件处理器需要运行16ms，那么定时器的回调函数将被添加到微任务队列中多少次？
3. 为什么事件处理程序的函数上下文有时与事件的目标不同？

事件循环不仅仅包含事件队列，更是包含两个队列，分别为：宏任务和微任务！
宏任务的事情很多：创建主文档对象，解析HTML，执行主线JS代码，更改当前的URL以及各种事件，页面加载，输入，网络事件和定时器事件
	从浏览器来看对应的 宏任务代表一个离散的，独立的工作单元。 运行完任务之后，浏览器可以继续其他调度，如重新渲染页面的UI或执行垃圾回收！
	
	微任务则是所属于更小的任务，更新应用程序的状态，并且必须在浏览器任务继续执行其他任务之前执行！ 微任务包括：
1. promise回调
2. DOM发生变化
3. 尽可能快的，通过异步执行
4. 不能产生全新的微任务，UI重绘会导致应用程序状态不连续！
事件循环的两个基本原则：
1. 一次处理一个任务
2. 一个任务开始后直到运行完成，不会被其他任务中断


但是主要的原则就是：先执行宏任务再执行微任务！事件循环中处理宏任务和微任务的区别：
1. 单次循环中，最多处理一个宏任务，而队列中的所有微任务都会被处理！
2. 对应的微任务队列处理完成并且完成并且清空的时候，事件循环会检查是否需要更新UI，如果是的话那么对应的就会重新render视图！

对应的其中的一些细节：
1. 任务队列的添加行为是独立于事件循环之外的，如果不这么做，会导致执行JS的时候，发生的任何事件都会被忽略！
2. 基于单线程执行模型的JS，两个任务都是逐个执行的，完成前不会被任何任务中断，除非浏览器决定终止，或者说执行时间过长或者说内存占用过大！
3. 渲染之前更新应用状态，因此所有的微任务队列在下一次render之前执行完成！
4. 浏览器尝试每秒渲染60次页面，以达到每秒60帧，这就是一个标准，也就对应着浏览器1000/60=16ms/帧 如果说想要实现平滑流畅的应用，我们没有太多时间浪费在单个事件循环任务的！ 单个任务和任务附属的所有微任务都应该控制在16ms完成的！

单线程导致一个时间点只能够执行一件事情！ 所有的任务都必须在队列中等待执行时机！

对应的讲到了通过DOM代理事件
	从两个嵌套div里面注册事件，对应的都是click事件，那么对应的事件处理器的细节是起作用的？
	事件的注册顺序是如何的？
需要从对应的最初的两大浏览器厂商开始说起：
	netscape(网景公司)的事件模型：	 			从事件处理器的顶部的元素开始，直到事件目标元素！ 具体表现为事件捕获！
	Microsoft的事件模型：
			从目标对象开始，直接到事件处理器的顶部元素！ 具体表现为 事件冒泡！
直到后面的W3C标准的设立，才慢慢将两种表现包含在一起！
		一个事件的处理方式为两种，分别是：
1. 捕获阶段 首先被顶部元素捕获，并且一次向下传递
2. 冒泡阶段。目标元素被捕获之后 事件转换为冒泡阶段！
其实分为三种阶段：
	1. 捕获
	2.目标
	3.冒泡 

对应的 document.addEventListener(eventName,callback,feedback); 对应的第三个参数表示是否要启用事件处理器的处理机制！
默认的事冒泡模式： 对应的点击按钮如果不写第三个参数，默认的就直接反馈 该反馈表示 冒泡阶段！

为什么这么做呢？ 缺省值 就是因为直接从目标元素做反馈！ 如果说是捕获阶段的话，那么对应的从顶层元素向下一层层向下捕获会触发非目标的父元素！

其实涉及到一个需求：
用户点击一个表格里面的单元格，点击的部分改变其点击的单元格颜色：
如果说遍历所有的元素的话并且添加处理器，其实并不优雅并且内存开销特别大！
如果说利用冒泡定位到具体的元素，并且可以很好的定位到具体并且设置其样式！
上代码：
```js
	const table = document.getElementById(‘Sometable’);
 	Table.addEventListener(‘Click’,event=>{
		If(event.target.tagName.toLowercase() === ‘td’){
			event.target.style.backgroundColor = ‘yellow’;
		}
	})
```
以上的处理方式更加的优雅，简洁！
	事件代理的方式，必须确保代理的元素是目标元素的祖先元素，这样才能够单击事件最终会冒泡到事件代理注册的元素上面！

后面讲到了一个自定义事件的案例，通过自定义的事件对特定的操作以事件的形式封装起来，更灵活！


跨浏览器开发技巧
1. 编写可复用的，可跨浏览器运行的JS代码
2. 分析需要解决的跨浏览器问题
3. 优雅的解决这些问题
	其中对应的JS开发者开发当页应用的时候，为了保证代码在多种浏览器上无暇的运行，兼容多种浏览器其实对应的还是会有很多问题的！
	包括当前需求的开发和以后为未来的浏览器做适配！
	
- 处理不同的浏览器行为不一致的常见方法是什么？
- 你的代码在别人的页面上可用的最佳方式是什么？
- 为什么在跨浏览器编写脚本的时候垫片非常有用？

其中比较重要对我来讲受益良多的几段话对我来讲同样的重要，就是：
1. 完善JS编程技能需要大量的时间和实践，特别是JS不仅限于浏览器的领域，同样的Node也适用于服务端！ 但是对应的通过使用JS开发基于浏览器的应用的时候，迟早都要面对多种浏览器的各种各样的问题和不一致性！
2. 虽然总的来说现在的浏览器的质量和以前相比提升了很多，但是对应的浏览器还是存在一些问题，在我们熟练使用JS的同时，对应的开发解决浏览器的完整方案，以及非常熟练地使用浏览器之间的差异和怪异行为同样重要！
3. 一个包容度高的，兼容性良好的浏览器同样重要，比如说Chrome就非常不错！

既然刚刚上面提到了，关于浏览器的选择这块，我们可以这样做：
1. 将使用测试套件积极测试浏览器
2. 我们将修复Bug并且回归有关浏览器
3. 浏览器执行代码的性能水平合理
与此同时，我们还需要权衡对应的付出与收益，并且在分析的时候要考虑不一致性，主要如下：
1. 目标受众的期望和需要
2. 浏览器的市场份额
3. 浏览器支持所需的工作量
对应的如果说是国内的浏览器占有率可以通过百度流量研究院进行查询，对应的可以看出一些差异化的！
	与此同时对一个比较重要的点做补充的地方是：	无论如何都不应该以牺牲质量来换取覆盖率！

	JS中的五大开发难题
1. 浏览器缺陷
2. 浏览器的缺陷修复
3. 外部代码
4. 浏览器回归
5. 浏览器确实的功能	
	
浏览器的Bug和差异
1. 其实可以通过测试工具来解决这个问题，但是保证对应的测试工具能够测试覆盖到代码常用的和不常用的用例！
2. 但是比较复杂的地方就是，当前浏览器的Bug会在未来的浏览器版本中被修复！

那么对应的浏览器的Bug修复
1. 把希望寄托于浏览器是错误的，因为对应的大部分的浏览器Bug最终都会修复，把希望寄托于浏览器bug上是不可取的，因为如果是浏览器上面的bug总会被修复的！
2. 对应的解决方案和措施就是对应的使用变通的方案！
如果说为了解决浏览器而使用特殊技巧，将来的浏览器发布新版本修复了bug！
处理浏览器漏洞的问题是双重的：
1. 当bug最终被修复，我们的代码容易损坏！
2. 我们无法为了避免网站损坏而说服浏览器厂商不修复Bug！

对应的不同浏览器的相同代码的不同表现形式，其实引出了另外一个关于bug的观念：
1. 在确定某一功能是否是潜在的错误的时候，使用规范进行验证！
2. 浏览器的bug不同于未指明的API，参考浏览器的规范是非常有必要的！

外部代码和标记：
1. 任何可重用的代码必须与它围绕的代码共存，那么随机出现的两个问题值得我们深思：
    1. 我们的代码必须经受得住外部代码！
    2. 还得必须克服环境对代码的不利影响！

将重复的代码抽离成为一个函数！
应对ID滥用
样式和脚本的加载顺序

回归： 就是在编写可复用的可维护的JS代码的时候，遇到的最难的问题之一，因为浏览器的Bug或者说API设计并不向后兼容， 导致代码不可预期的中断了！

对于说未来的API是不容易预测到的，最佳实践就是在发行的版本中模拟测试，以快速地发现问题！


安全的跨浏览器修复方法：
1. 在其他浏览器上没有副作用
2. 不使用浏览器或特性检测


特性检测和垫片
	特性检测就是对应的在跨浏览器开发的时候常常用到的，就是检测某一对象属性是否存在，如果存在则假设提供了内置方法！
	特性检测用于在多种API中做出选择！
	但是如果说一些方法只能够在ES6中用，那么对应不支持ES6的浏览器应该怎么办呢？
	就是使用对应的垫片(polyfill)垫片是浏览器备用模式！ 如果说浏览器不支持某一特定的功能，那么对应的就提供自己的实现！ 
	对应的特性检测，可以决定我们是否需要提供备用的功能选项！
	
以下的几种情况我们就可以决定使用备用方法：
1. 浏览器是否加载文档
2. 浏览器是否提供事件的绑定方法
3. 浏览器能否给予选择器查找元素

不可测试的浏览器问题：	
1. 绑定事件处理器
2. 事件触发
3. CSS属性影响
4. 浏览器崩溃
5. 不一致的API
6. API的性能测试 不总是显而易见的！

减少假设：
1. 努力减少假设，有效地减少犯错的余地和概率！

本文最后讲到了对应的ES6的一些新的特性和对应的调试工具从firebug和chromeDevTools以及对应的一些测试小tips还有对应的测试框架框架
