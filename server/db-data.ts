export const COURSES: any = {


  2: {
    id: 2,
    titles: {
      description: 'Pasta Carbonara',
      longDescription: 'Discover how to make superb spaghetti carbonara. This cheesy pasta dish is an Italian favourite and with the right technique, you can make it perfect every time'
    },
    iconUrl: 'https://www.eatwell.co.nz/images/recipes/21082011HOSSpaghettiCarbonara.jpg?width=603&height=339&mode=crop&upscale=false',
    lessonsCount: 10,
    category: 'BEGINNER',
    seqNo: 1,
    url: 'pasta-carbonara'
    //url: 'angular-core-course'
  },

  3: {
    id: 3,
    titles: {
      description: 'Original Grilled Cheese Sandwich',
      longDescription: 'This gourmet grilled cheese sandwich recipe is so easy to make at home! Make it when the craving strikes, and it will become your new favorite.'
    },
    iconUrl: 'https://image.businessinsider.com/5ad50664146e712b008b4ac2?width=1100&format=jpeg&auto=webp',
    category: 'BEGINNER',
    lessonsCount: 10,
    seqNo: 2,
    url: 'grilled-cheese'
    //url: 'rxjs-course'
  },



  1: {
    id: 1,
    titles: {
      description: 'Perfect Fried Eggs',
      longDescription: 'These fried eggs have golden, lacy, crispy edges, which contrast beautifully with their runny yellow yolks. Contrast is everything!'
    },
    iconUrl: 'https://iamafoodblog.com/wp-content/uploads/2019/01/how-to-make-crispy-fried-eggs-5729w.jpg',
    lessonsCount: 10,
    category: 'BEGINNER',
    seqNo: 4,
    url: 'perfect-fried-eggs'
   // url: 'serverless-angular'
  },



  6: {
    id: 6,
    titles: {
      description: 'Cinnamon Rolls',
      longDescription: 'The best homemade cinnamon rolls ever! If you love gooey cinnamon buns, here’s the secret ingredient. Everyone raves about these homemade yeast rolls.'
    },
    iconUrl: 'https://images-gmi-pmc.edge-generalmills.com/473d320b-fa9f-43fb-8fde-410b450dd328.jpg',
    category: 'ADVANCED',
    lessonsCount: 11,
    seqNo: 6,
    url: 'cinnamon-rolls'
    //url: 'angular-security-course'
  },

  7: {
    id: 7,
    titles: {
      description: 'Beef Wellington',
      longDescription: 'Beef Wellington celebrates the luxurious and very tender fillet of beef and is one of those ultimate blowout dishes that hits the right spot several times in one meal.'
    },
    iconUrl: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/beef_wellington_with_35577_16x9.jpg',
    category: 'ADVANCED',
    lessonsCount: 8,
    seqNo: 7,
    url: 'beef-wellington'
    //url: 'angular-pwa-course'
  },

  8: {
    id: 8,
    titles: {
      description: 'Fudgey Chocolate Brownies',
      longDescription: 'The best, fudgy one bowl cocoa brownies! a special addition gives these brownies a super fudgy centre without losing that crispy, crackly top!'
    },
    iconUrl: 'https://i.ytimg.com/vi/A82HlaPTzjk/maxresdefault.jpg',
    category: 'ADVANCED',
    seqNo: 8,
    url: 'fudgey-brownies'
    //url: 'angular-advanced-course'
  }


};


export const LESSONS = {




  // Cinnamon Rolls
  11: {
    id: 11,
    'description': 'Ingredients',
    'duration': '08:19',
    'seqNo': 1,
    courseId: 6
  },

  12: {
    id: 12,
    'description': 'Making the dough',
    'duration': '04:17',
    'seqNo': 2,
    courseId: 6
  },

  13: {
    id: 13,
    'description': 'Getting ready to heat it up',
    'duration': '06:05',
    'seqNo': 3,
    courseId: 6
  },

  14: {
    id: 14,
    'description': 'Cuttin the dough and spacing',
    'duration': '03:57',
    'seqNo': 4,
    courseId: 6
  },

  15: {
    id: 15,
    'description': 'Preparing the sauce',
    'duration': '06:00',
    'seqNo': 5,
    courseId: 6
  },
  16: {
    id: 16,
    'description': 'Glazing the rolls with the sauce',
    'duration': '04:53',
    'seqNo': 6,
    courseId: 6
  },
  17: {
    id: 17,
    'description': 'Serving techniques',
    'duration': '09:14',
    'seqNo': 7,
    courseId: 6
  },


  // Beef Wellington

  22: {
    id: 22,
    'description': 'Ingredients',
    'duration': '07:19',
    'seqNo': 1,
    courseId: 7
  },
  23: {
    id: 23,
    'description': 'Beef selection',
    'duration': '6:59',
    'seqNo': 2,
    courseId: 7
  },
  24: {
    id: 24,
    'description': 'Buttering and mushrooms',
    'duration': '7:28',
    'seqNo': 3,
    courseId: 7
  },
  25: {
    id: 25,
    'description': 'Spices preparation and cooking',
    'duration': '10:17',
    'seqNo': 4,
    courseId: 7
  },

  26: {
    id: 26,
    'description': 'Tortilla jacket rolling',
    'duration': '09:50',
    'seqNo': 5,
    courseId: 7
  },
  27: {
    id: 27,
    'description': 'Heating it up',
    'duration': '04:44',
    'seqNo': 6,
    courseId: 7
  },
  28: {
    id: 28,
    'description': 'Resting and tips',
    'duration': '06:07',
    'seqNo': 7,
    courseId: 7
  },
  29: {
    id: 29,
    'description': 'Serving techniques',
    'duration': '5:38',
    'seqNo': 8,
    courseId: 7
  },

  // Perfect Fried Eggs

  30: {
    id: 30,
    description: 'Is frying eggs that easy? Debunking myths',
    'duration': '5:38',
    'seqNo': 1,
    courseId: 1
  },

  31: {
    id: 31,
    description: 'Frying our eggs',
    'duration': '5:12',
    'seqNo': 2,
    courseId: 1
  },

  32: {
    id: 32,
    description: 'Buttering pasting',
    'duration': '4:07',
    'seqNo': 3,
    courseId: 1
  },

  33: {
    id: 33,
    description: 'Serving',
    'duration': '2:32',
    'seqNo': 4,
    courseId: 1
  },

  34: {
    id: 34,
    description: 'Lets take it a step further',
    'duration': '6:28',
    'seqNo': 5,
    courseId: 1
  },

  35: {
    id: 35,
    description: 'Prosciutto and Bagel',
    'duration': '4:38',
    'seqNo': 6,
    courseId: 1
  },

  36: {
    id: 36,
    description: 'Black truffle grating',
    'duration': '7:54',
    'seqNo': 7,
    courseId: 1
  },

  37: {
    id: 37,
    description: 'Serving tips',
    'duration': '5:31',
    'seqNo': 8,
    courseId: 1
  }



};




export function findCourseById(courseId: number) {
  return COURSES[courseId];
}

export function findLessonsForCourse(courseId: number) {
  return Object.values(LESSONS).filter(lesson => lesson.courseId == courseId);
}
