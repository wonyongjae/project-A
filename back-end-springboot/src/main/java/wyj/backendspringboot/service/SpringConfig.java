package wyj.backendspringboot.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import wyj.backendspringboot.repository.MemoryMemberRepository;

@Configuration
public class SpringConfig {
    
    @Bean
	public MemberService memberService() {
		return new MemberService(memoryMemberRepository());
	}

	@Bean
	public MemoryMemberRepository memoryMemberRepository() {
		return new MemoryMemberRepository();
	}
}
