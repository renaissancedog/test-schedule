// Script to peruse catalog .txt file
// By William Liu, 2025
package scripts;

import java.io.*;
import java.util.ArrayList;
import java.util.StringTokenizer;
public class Catalog {
  public static void main(String[] args) throws IOException{
    String infile="scripts/neisdcatalog9524.txt";
    String outfile="scripts/processedcatalog.txt";
    ArrayList<Course> courses = new ArrayList<Course>();
    try (BufferedReader r = new BufferedReader(new FileReader(infile))) {
      String line = r.readLine();
      while (line!=null) {
        if (line.startsWith("Course:")) {
          //This is all one course
          String name=line.substring(8);
          String desc="";
          int num;
          double credits;
          String term;
          String grade="";
          String preq = "";
          String notes = "";
          String l =r.readLine();
          if (l.equals("Course Description:")) {
            line=r.readLine(); //should be the first line of the description
          } else {
            line=l.substring(20);
          }
          while (!line.startsWith("Course Number:")) {
            desc+=line;
            desc+=" ";
            line=r.readLine(); 
          }
          StringTokenizer st=new StringTokenizer(line);
          st.nextToken(); //Course
          st.nextToken(); //Number:
          String cn=st.nextToken();
          if (cn.length()>4) {
            num=Integer.parseInt(cn.substring(0, 4));
            // st.nextToken();
          } else {
            num=Integer.parseInt(cn);
          }
          st.nextToken(); //Credits:
          credits=Double.parseDouble(st.nextToken()); //ex: 0.5
          st.nextToken(); //Term:
          if (st.nextToken().startsWith("Full")) {
            term="Year";
            st.nextToken(); //the 'year' in 'full year'
          } else {
            term="Semester";
          }
          st.nextToken(); //Grade
          st.nextToken(); //Placement:
          while (st.hasMoreTokens()) {
            grade+=(st.nextToken());
          }
          line = r.readLine();//Prerequisites: ...
          while (!line.startsWith("Special Notes")) {
            preq+=line;
            preq+=" ";
            line = r.readLine();
          }
          preq=preq.substring(15);
          while (!line.startsWith("Course:")) {
            notes+=line;
            notes+=" ";
            line = r.readLine();
            if (line==null) {
              break;
            }
          }
          notes=notes.substring(15);
          Course c = new Course(name, desc, num, credits, term, grade, preq, notes);
          courses.add(c);
        }
        line = r.readLine();
      }
    } catch (IOException e) {
      System.err.println("Error reading the file: " + e.getMessage());
    }
    PrintWriter pw=new PrintWriter(new FileWriter(outfile));
    for (Course c:courses) {
      pw.print(c.name+"\n"+c.desc+"\n"+c.num+"\n"+c.cred+"\n"+c.term+"\n"+c.grade+"\n"+c.preq+"\n"+c.notes+"\n");
    }
    pw.close();
  }
}