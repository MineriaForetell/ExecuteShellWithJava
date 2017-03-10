/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package myPkg;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.util.Formatter;
import java.util.Random;

/**
 *
 * @author Rakshit Shah
 */
public class FileGeneratorMain {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        int i,j;
    //     Random rn = new Random();
    //  int randn = 1+rn.nextInt(999999990);
    //  String I_S = Integer.toString(randn);

      File file;


      try{

          for( i=0 ; i<=100; i=i+10){
              for(j=0 ;j<=100 ; j=j+10)
              {
                  String tempi = Integer.toString(i);
                  String tempj = Integer.toString(j);
                  //file = new Formatter("MINE_X_POINT_DETAILS_P_"+i+"_"+j+".csv");
                  file = new File("/home/raxton/data/drillfiles/MINE_X_POINT_DETAILS_P_"+i+"_"+j+".csv");
                  
                  if (!file.exists()) {
				file.createNewFile();
			}
                   String content="";
                   
                  for (int k=0;k<=100;k=k+10)
                  {
                      Random m = new Random();
                      Float randn;
                      randn = 5*m.nextFloat();
    //                  String I_S = Integer.toString(randn);
                      content=content.concat(k+"|"+randn+"|null\n");
                  }
                  
                  FileWriter fw = new FileWriter(file.getAbsoluteFile());
			BufferedWriter bw = new BufferedWriter(fw);
			bw.write(content);
			bw.close();
                 
                  
              }
             
          }
           System.out.println("Done");
      }
      catch(Exception ex){
        System.err.println("Error");
      }

        
        
    }
    
}