package org.kosa.app.add_app;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api")
@Slf4j
public class AddController {

	@GetMapping("add")
	public ResponseEntity<Map<String, Object>> add(@RequestParam(name = "a", defaultValue = "0") int a,
			@RequestParam(name = "b", defaultValue = "0") int b) {
		log.info("a = {} , b = {} , result = {}", a, b, a + b);
		return ResponseEntity.ok(Map.of("result", a + b));
	}

}
