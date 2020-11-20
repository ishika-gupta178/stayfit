function BMI()
{
	var height = document.getElementById("height").value;
	var weight = document.getElementById("weight").value;
	if(height > 5)
		alert("Height should be in metres");
	if(weight > 150)
		alert("Weight should be in kilograms");
	var bmi = weight/(height*height);
	location.href="weight.html?bmi=" + bmi;
}

function print_bmi()
{
	const urlParams = new URLSearchParams(location.search);
	const myParam = urlParams.get('bmi');
	const param = Math.round(myParam * 100) / 100;
	document.getElementById("yourbmi").innerHTML = param;
	if(param >= 25)
	{
		const result = '<div style="margin-top:20px">&gt 25</div><div> You are overweight/obese </div><div style="margin-bottom: 5px;">Read below to know how you can stay fit! </div><img id="image" src="https://s3-us-west-2.amazonaws.com/beachbody-blog/uploads/2030/09/How-to-Stop-Cravings.960-1300x400.jpg" width=100%>';
		document.getElementById("result").innerHTML = result;
		const data = '<p>Common treatments for overweight and obesity include losing weight through healthy eating, being more physically active, and making other changes to your usual habits. Weight-management programs may help some people lose weight or keep from regaining lost weight. Some people who have obesity are unable to lose enough weight to improve their health or are unable to keep from regaining weight. In such cases, a doctor may consider adding other treatments, including weight-loss medicines, weight-loss devices, or bariatric surgery.</p><p>Experts recommend losing 5 to 10 percent of your body weight within the first 6 months of treatment.</p><p>Following a healthy eating plan with fewer calories is often the first step in trying to treat overweight and obesity.</p><p>People who are overweight or have obesity should also start regular physical activity when they begin their healthy eating plan. Being active may help you use calories. Regular physical activity may help you stay at a healthy weight.</p>';
		document.getElementById("background").innerHTML = data;
	}
	else if (param < 18.5)
	{
		const result = '<div style="margin-top:20px">&lt 18.5</div><div> You are underweight </div><div style="margin-bottom: 5px;">Read below to know how you can stay fit! </div><img id="image" src="https://accumass.com/blog/wp-content/uploads/2018/06/What-are-Causes-of-Being-Underweight.jpg" width=100%>'
		document.getElementById("result").innerHTML = result;
		const data = '<p>Although being lean can often be healthy, being underweight can be a concern if it is the result of poor nutrition or if you are pregnant or have other health concerns. So, if you are underweight, see your doctor or dietitian for an evaluation. Together, you can plan how to meet your goal weight.</p><p>Eat more frequently. When you are underweight, you may feel full faster. Eat five to six smaller meals during the day rather than two or three large meals..Choose nutrient-rich foods. As part of an overall healthy diet, choose whole-grain breads, pastas and cereals; fruits and vegetables; dairy products; lean protein sources; and nuts and seeds.Watch when you drink. Some people find that drinking fluids before meals blunts their appetite. In that case, it may be better to sip higher calorie beverages along with a meal or snack. For others, drinking 30 minutes after a meal, not with it, may work. Have an occasional treat. Even when you are underweight, be mindful of excess sugar and fat. An occasional slice of pie with ice cream is OK. But most treats should be healthy and provide nutrients in addition to calories. Bran muffins, yogurt and granola bars are good choices. Exercise. Exercise, especially strength training, can help you gain weight by building up your muscles. Exercise may also stimulate your appetite.</p>';
		document.getElementById("background").innerHTML = data;
	}
	else
	{
		const result = '<div style="margin-top:20px">&gt 18.5 &amp &lt 24.9</div><div> You are normal weight </div><div style="margin-bottom: 5px;">Read below to know how you can stay fit! </div><img id="image" src="https://s3-us-west-2.amazonaws.com/beachbody-blog/uploads/2020/07/How-to-Jump-Rope.980-1300x400.jpg" width=100%>'
		document.getElementById("result").innerHTML = result;
		const data = '<p>A lot of factors play a role in staying healthy. In turn, good health can decrease your risk of developing certain conditions. These include heart disease, stroke, some cancers, and injuries. Learn what you can do to maintain your and your family’s health.</p><p>Eat healthy.</p><p>What you eat is closely linked to your health. Balanced nutrition has many benefits. By making healthier food choices, you can prevent or treat some conditions. These include heart disease, stroke, and diabetes. A healthy diet can help you lose weight and lower your cholesterol, as well.</p><p>Get regular exercise. </p><p>Exercise can help prevent heart disease, stroke, diabetes, and colon cancer. It can help treat depression, osteoporosis, and high blood pressure. People who exercise also get injured less often. Routine exercise can make you feel better and keep your weight under control. Try to be active for 30 to 60 minutes about 5 times a week. Remember, any amount of exercise is better than none</p><p>Protect your skin.</p><p>Sun exposure is linked to skin cancer. This is the most common type of cancer in the United States. It’s best to limit your time spent in the sun. Be sure to wear protective clothing and hats when you are outside. Use sunscreen year-round on exposed skin, like your face and hands. It protects your skin and helps prevent skin cancer. Choose a broad-spectrum sunscreen that blocks both UVA and UVB rays. It should be at least an SPF 15. Do not sunbathe or use tanning booths.</p><p>Don’t smoke or use tobacco.</p><p>Smoking and tobacco use are harmful habits. They can cause heart disease and mouth, throat, or lung cancer. They also are leading factors of emphysema and chronic obstructive pulmonary disease (COPD). The sooner you quit, the better.</p><p>Limit how much alcohol you drink.Men should have no more than 2 drinks a day. Women should have no more than 1 drink a day. One drink is equal to 12 ounces of beer, 5 ounces of wine, or 1.5 ounces of liquor. Too much alcohol can damage your liver. It can cause some cancers, such as throat, liver, or pancreas cancer. Alcohol abuse also contributes to deaths from car wrecks, murders, and suicides.</p>';
		document.getElementById("background").innerHTML = data;
	}
}

function ideal()
{
	var age = document.getElementById("age").value;
	var gender = document.getElementById("gender").value;
	gender = gender.toLowerCase();
	//if(gender != "male" || gender!="female")
		//alert("Invalid gender");
	location.href="idealresult.html?age="+age;
}

function print_ideal()
{
	const urlParams = new URLSearchParams(location.search);
	const age = urlParams.get('age');
	if(age >= 0 && age < 2)
		{
			const res = '<div style="margin-top:20px"></div><h2 style="margin-bottom:10px;"> Your ideal weight and height should lie between: </h2><span>3.3-11.7kg and 49.2-85.1cm</span><div style="margin-top:10px; margin-bottom: 5px;">Read below to know how you can stay fit! </div><img id="image" src="https://cdn.cdnparenting.com/articles/2018/09/11-Physical-Developmental-Milestones-for-Toddlers-Ages-1-2-and-Activities-to-Boost-Them.jpg " width=100%>';
			document.getElementById("result").innerHTML = res;
			const d = '<p>During this second year of life, growth slows down. Your toddler may gain about 5 pounds (2.27 kg) and grow about 4 or 5 inches (10 to 12 cm). By 2 years, children have reached about half of their adult height and 90% of adult head size. Boys tend to weigh about a pound more than girls but average about the same height. </p><p>What you will notice more than actual growth are changes in a toddlers appearance. Body proportions are beginning to change. Instead of sporting the rounded belly and relatively short arms and legs suited to crawling on all fours, toddlers start to trim down, become more muscular because of increased activity, and will begin to look more like preschoolers than babies. </p>';
			document.getElementById("background").innerHTML = d;
		}
		else if(age >= 2 && age <= 12)
		{
			const res = '<div style="margin-top:20px"></div><h2 style="margin-bottom:10px;"> Your ideal weight and height should be: </h2><span>12-41.5kg and 85.5-149.8cm</span><div style="margin-top:10px; margin-bottom: 5px;">Read below to know how you can stay fit! </div><img id="image" src=" https://labtestsonline.org/sites/aacc-lto.us/files/inline-images/kids%201000x270_people_022.jpg " width=100%>';
			document.getElementById("result").innerHTML = res;
			const d = '<p> Eating. At this age, kids should begin making healthy food choices on their own. Your childs diet should include lean protein, whole grains, fruits and vegetables, and low-fat dairy. Kids this age should get 3 cups (720 ml) of low-fat or nonfat milk (or of low-fat or nonfat dairy products) daily. Aim for five servings of fruits and vegetables per day. Limit high-sugar and high-fat foods and drinks. </p><p> Sleeping. Kids this age need about 9–12 hours of sleep per night. Lack of sleep can make it hard to pay attention at school. Set a bedtime that allows for enough sleep and encourage your child to follow a relaxing bedtime routine. Keep TVs and all digital devices out of your childs bedroom. </p> <p> Physical activity. Kids this age should get at least 60 minutes of physical activity per day. Set daily limits on screen time, including TV, DVDs, video games, smartphones, tablets, and computers.</p>';
			document.getElementById("background").innerHTML = d;
		}
		else if (age >= 13 && age <=20)
		{
			const res = '<div style="margin-top:20px"></div><h2 style="margin-bottom:10px;"> Your ideal weight and height should be: </h2><span>45.8-58kg and 156.7-163.3cm</span><div style="margin-top:10px; margin-bottom: 5px;">Read below to know how you can stay fit! </div><img id="image" src=" https://i2.wp.com/www.director.co.uk/wp-content/uploads/2016/07/18-year-old-selves-receieve-business-advice.jpg?fit=1000%2C500&ssl=1 " width=100%>';
			document.getElementById("result").innerHTML = res;
			const d = '<p> Growth during adolescence is linked to the hormonal changes of puberty. Girls usually enter puberty earlier than boys. The inches and pounds added during adolescence can matter in a big way. Inches added to height = 25 percent of final adult heightPounds added to weight = 50 percent of final ideal weightWeekend morning sleep-ins are your teen’s way of making up for missed sleep. Teens need at least nine to 10 hours of sleep per night. If your teenager sleeps more than one hour past his or her typical wake time, this is evidence of chronic sleep deprivation. Chronic daytime sleepiness, poor grades in morning classes, or drowsiness when driving are signs that your teen might need a more consistent sleep routine every day of the week. </p>';
			document.getElementById("background").innerHTML = d;
		} 
		else
		{
			const res = '<div style="margin-top:20px"></div><h2 style="margin-bottom:10px;"> Your ideal weight and height should be: </h2><span> above 58kg and above 163.3cm</span><div style="margin-top:10px; margin-bottom: 5px;">Read below to know how you can stay fit! </div><img id="image" src=" https://fitnesstogether.com/files/shared/Middle%20aged%20couple%20with%20bikes.jpg" width=100%>';
			document.getElementById("result").innerHTML = res;
			const d = '<p> While most 20-year-olds don’t worry much about their health, studies show the lifestyle and health decisions we make during our third decade of life have a dramatic effect on how well we age. Staying healthy in your 20s is strongly associated with a lower risk for heart disease in middle age, according to research from Northwestern University. That study showed that most people who adopted five healthy habits in their 20s – a lean body mass index, moderate alcohol consumption, no smoking, a healthy diet and regular physical activity – stayed healthy well into middle age.</p>';
			document.getElementById("background").innerHTML = d;
		}
}