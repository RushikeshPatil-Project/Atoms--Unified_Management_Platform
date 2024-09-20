package com.exam.controller;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.sl.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.exam.model.exam.Category;
import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import com.exam.service.QuestionService;
import com.exam.service.QuizService;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {
	
	final static Logger LOGGER = Logger.getLogger(QuizController.class.getName());
	
    @Autowired
    private QuizService quizService;
    @Autowired
    private QuestionService questionService;

    //add quiz service
    @PostMapping("/")
    public ResponseEntity<Quiz> add(@RequestBody Quiz quiz) {
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    //update quiz

    @PutMapping("/")
    public ResponseEntity<Quiz> update(@RequestBody Quiz quiz) {
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }

    //get quiz
    @GetMapping("/")
    public ResponseEntity<?> quizzes() {
        return ResponseEntity.ok(this.quizService.getQuizzes());
    }

    //get single quiz
    @GetMapping("/{qid}")
    public Quiz quiz(@PathVariable("qid") Long qid) {
        return this.quizService.getQuiz(qid);
    }

    //delete the quiz
    @DeleteMapping("/{qid}")
    public void delete(@PathVariable("qid") Long qid) {
        this.quizService.deleteQuiz(qid);
    }

    @GetMapping("/category/{cid}")
    public List<Quiz> getQuizzesOfCategory(@PathVariable("cid") Long cid) {
        Category category = new Category();
        category.setCid(cid);
        return this.quizService.getQuizzesOfCategory(category);
    }

    //get active quizzes
    @GetMapping("/active")
    public List<Quiz> getActiveQuizzes() {
        return this.quizService.getActiveQuizzes();
    }

    //get active quizzes of category
    @GetMapping("/category/active/{cid}")
    public List<Quiz> getActiveQuizzes(@PathVariable("cid") Long cid) {
        Category category = new Category();
        category.setCid(cid);
        return this.quizService.getActiveQuizzesOfCategory(category);
    }
    
    @PostMapping("/bulk-upload")
    public ResponseEntity<?> importQuestions(@RequestParam("id") String quizId,@RequestParam("file") MultipartFile file) {
        try {
        	LOGGER.info("Inside QuizController quizId."+quizId);
        	LOGGER.info("Inside QuizController getSize."+file.getSize() );

        	
            List<Question> questions = parseExcelFile(Long.parseLong(quizId),file);
            questionService.saveAll(questions);
            return ResponseEntity.status(HttpStatus.OK).body("Questions imported successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to import questions");
        }
    }

    private List<Question> parseExcelFile(Long quizId,MultipartFile file) throws IOException {
        List<Question> questions = new ArrayList<>();
        LOGGER.info("Inside QuizController parseExcelFile:"+ quizId);
        LOGGER.info("Inside QuizController parseExcelFile getSize:"+ file.getSize());

        LOGGER.info("Inside QuizController parseExcelFile getName:"+ file.getName());

        Quiz quiz= quizService.getQuiz(quizId);
   	 LOGGER.info("Inside QuizController parseExcelFile Quiz Category:"+ quiz.getCategory());
        
        try (Workbook workbook = new XSSFWorkbook(file.getInputStream());) {
			XSSFSheet worksheet = (XSSFSheet) workbook.getSheetAt(0);

			for (int i = 0; i < worksheet.getPhysicalNumberOfRows(); i++) {

				XSSFRow row = worksheet.getRow(i);

        	 LOGGER.info("Inside QuizController parseExcelFile Quiz Workbook:"+ workbook);

        	
                 Question question = new Question();
                 question.setContent(row.getCell(0).getStringCellValue());
                 question.setOption1(row.getCell(1).getStringCellValue());
                 question.setOption2(row.getCell(2).getStringCellValue());
                 question.setOption3(row.getCell(3).getStringCellValue());
                 question.setOption4(row.getCell(4).getStringCellValue());
                 question.setQuiz(quiz);
                 question.setAnswer(row.getCell(5).getStringCellValue());
                 // Add other fields as needed
                 questions.add(question);
                 
                 
                 
			} 
        	
//            while (rowIterator.hasNext())
//            {
//                Row row = rowIterator.next();
//                LOGGER.info("Inside QuizController parseExcelFile Quiz Row:"+ row.getRowNum());
//                Question question = new Question();
//                question.setContent(row.getCell(0).getStringCellValue());
//                question.setOption1(row.getCell(1).getStringCellValue());
//                question.setOption2(row.getCell(2).getStringCellValue());
//                question.setOption3(row.getCell(3).getStringCellValue());
//                question.setOption4(row.getCell(4).getStringCellValue());
//                question.setQuiz(quiz);
//                question.setAnswer(row.getCell(5).getStringCellValue());
//                // Add other fields as needed
//                questions.add(question);
//            }

        }
        LOGGER.info("Inside QuizController parseExcelFile Quiz QuestionsContent:"+ questions.get(0).getContent());
        return questions;
    }




}
