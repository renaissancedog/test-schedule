package scripts;

public class Course {
  String name;
  String desc;
  int num;
  double cred;
  String term;
  String grade;
  String preq;
  String notes;
  public Course(String name, String desc, int num, double cred, String term, String grade, String preq, String notes) {
    this.name = name;
    this.desc = desc;
    this.num = num;
    this.cred = cred;
    this.term = term;
    this.grade = grade;
    this.preq = preq;
    this.notes = notes;
  }
  public String toString() {
    return name + " " + desc + " " + num + " " + cred + " " + term + " " + grade + " " + preq + " " + notes;
  }
}