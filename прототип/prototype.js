

  function Human() {
		this.name = 'Meri';
		this.age = 20;
		this.sex = 'female';
		this.weight = 60;
		this.height = 164;
	}
	
	function Worker(){
		this.jobPlace = 'office';
		this.salary = 1000;
		this.type = 'mentalWork';
	}
	
	function Student(){
		this.grant = 800;
		this.university = 'Karazina';
		this.overTime = function(){
			alert("I'm watching film right now");
		}
	}
	
	Worker.prototype = new Human();
	Student.prototype = new Human();
	var newWorker = new Worker();
	var newStudent = new Student();
	
	console.log ('newWorker.name',newWorker.name);
    newStudent.overTime();
	