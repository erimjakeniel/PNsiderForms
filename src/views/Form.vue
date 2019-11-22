<template>
  <v-container fluid>
    <h1>CENTER ROUTINE</h1>
    <v-radio-group v-model="column" column>
      <h3>How do you feel in the center?</h3>
      <v-radio label="Comfortable" value="feel-1"></v-radio>
      <v-radio label="Happy" value="feel-2"></v-radio>
      <v-radio label="Homesick" value="feel-3"></v-radio>
      <v-radio label="Sad" value="feel-4"></v-radio>
    </v-radio-group>
    <hr>
    <!-- <v-radio-group v-model="row" row>
      <v-radio label="Option 1" value="radio-1"></v-radio>
      <v-radio label="Option 2" value="radio-2"></v-radio>
    </v-radio-group>-->
    <v-radio-group v-model="column" column>
      <h3>How was your relationship to your co-scholar?</h3>
      <v-radio label="Good" value="scholar-1"></v-radio>
      <v-radio label="Normal" value="scholar-2"></v-radio>
      <v-radio label="Bad" value="scholar-3"></v-radio>
    </v-radio-group>
    <hr>

    <v-radio-group v-model="column" column>
      <h3>How was your relationship with PN Staff?</h3>
      <v-radio label="Good" value="staff-1"></v-radio>
      <v-radio label="Normal" value="staff-2"></v-radio>
      <v-radio label="Bad" value="staff-3"></v-radio>
    </v-radio-group>
    <hr>
    <v-radio-group v-model="column" column>
      <h3>How was your overall performance and collaboration of the tasking team?</h3>
      <v-radio label="Good" value="tasking-1"></v-radio>
      <v-radio label="Normal" value="tasking-2"></v-radio>
      <v-radio label="Bad" value="tasking-3"></v-radio>
    </v-radio-group>
    <hr>
    <v-radio-group v-model="column" column>
      <h3>Which educational activities do you prefer?</h3>
      <v-radio label="Sports" value="educ-1"></v-radio>
      <v-radio label="Lecture" value="educ-2"></v-radio>
      <v-radio label="Film viewing" value="educ-3"></v-radio>
      <v-radio label="Clubings" value="educ-4"></v-radio>
      <v-radio label="Others" value="educ-5"></v-radio>
      <v-text-field v-model="others" label="Your answer" value="educ-6"></v-text-field>
    </v-radio-group>
    <hr>
    <v-radio-group v-model="column" column>
      <h3>What PN core values did you experience this week?</h3>
      <v-radio label="Demand" value="values-1"></v-radio>
      <v-radio label="Respect" value="values-2"></v-radio>
      <v-radio label="Responsibility" value="values-3"></v-radio>
      <v-radio label="Solidarity" value="values-4"></v-radio>
      <v-radio label="Trust" value="values-5"></v-radio>
    </v-radio-group>
    <hr>
    <v-radio-group v-model="column" column>
      <h3>What soft skill or behavior that you want to improve?</h3>
      <v-radio label="Listening Skill" value="improve-1"></v-radio>
      <v-radio label="Anger Management" value="improve-2"></v-radio>
      <v-radio label="Sensitivity to Others" value="improve-3"></v-radio>
      <v-radio label="Punctuality" value="improve-4"></v-radio>
      <v-radio label=" Politiness" value="improve-5"></v-radio>
      <v-radio label="Self Awareness" value="improve-6"></v-radio>
      <v-radio label="Patience" value="improve-7"></v-radio>
      <v-radio label="Honesty" value="improve-8"></v-radio>
      <v-radio label="Others" value="improve-9"></v-radio>
      <v-text-field v-model="others" label="Your answer" value="improve-10"></v-text-field>
    </v-radio-group>

    <h1>ACADEMICS</h1>
    <v-radio-group v-model="column" column>
      <h3>What subject do you find difficult?</h3>
      <v-radio label="Programming" value="subject-1"></v-radio>
      <v-radio label="Web Development" value="subject-2"></v-radio>
      <v-radio label="Networking" value="subject-3"></v-radio>
      <v-radio label="Database" value="subject-4"></v-radio>
      <v-radio label="Computer Science" value="subject-5"></v-radio>
      <v-radio label="Others" value="subject-5"></v-radio>
      <v-text-field v-model="others" label="Your answer" value="subject-6"></v-text-field>
    </v-radio-group>
    <hr>
    <v-radio-group v-model="column" column>
      <h3>How do you deal with your difficulties?</h3>
      <v-radio label="Self Study" value="deal-1"></v-radio>
      <v-radio label="Ask for Help" value="deal-2"></v-radio>
      <v-radio label="Tutorial" value="deal-3"></v-radio>
      <v-radio label="Others" value="deal-4"></v-radio>
      <v-text-field v-model="others" label="Your answer" value="deal-5"></v-text-field>
    </v-radio-group>
    <hr>
    <v-radio-group v-model="column" column>
    <h3>How was your relationship with your teacher?</h3>
      <v-radio label="Respectful" value="teacher-1"></v-radio>
      <v-radio label="Courteus" value="teacher-2"></v-radio>
      <v-radio label="Educational" value="teacher-3"></v-radio>
      <v-radio label="Helpful" value="teacher-4"></v-radio>
      <v-radio label="Others" value="teacher-5"></v-radio>
      <v-text-field v-model="others" label="Your answer" value="teacher-6"></v-text-field>
    </v-radio-group>
     <hr>
    <v-radio-group v-model="column" column>
    <h3>What academic skill that you want to improve?</h3>
      <v-radio label="Critical Thinking" value="acadsimprove-1"></v-radio>
      <v-radio label="Understanding" value="acadsimprove-2"></v-radio>
      <v-radio label="Application" value="acadsimprove-3"></v-radio>
      <v-radio label="Coding" value="acadsimprove-4"></v-radio>
      <v-radio label="Others" value="acadsimprove-5"></v-radio>
      <v-text-field v-model="others" label="Your answer" value="acadsimprove-6"></v-text-field>
    </v-radio-group>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      column: null,
      row: null
    };
  }
};
</script>