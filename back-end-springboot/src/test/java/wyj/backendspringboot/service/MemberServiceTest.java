package wyj.backendspringboot.service;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import wyj.backendspringboot.domain.Member;
import wyj.backendspringboot.repository.MemoryMemberRepository;

public class MemberServiceTest {

    MemberService memberService;
    MemoryMemberRepository memberRepository;

    @BeforeEach
    public void beforeEach() {
        memberRepository = new MemoryMemberRepository();
        memberService = new MemberService(memberRepository);
    }

    @AfterEach
    public void afterEach() {
        memberRepository.clearStore();
    };

    @Test
    void join() {
        //given
        Member member = new Member();
        member.setName("wyj");

        //when
        Long saveId = memberService.join(member);

        //then
        Member findmember = memberService.findOne(saveId).get();
        assertThat(member.getName()).isEqualTo(findmember.getName());

    }

    @Test
    void findMembers() {
        //given
        Member member1 = new Member();
        member1.setName("wyj");

        Member member2 = new Member();
        member2.setName("wyj");

        //when
        memberService.join(member1);
        // try {
        //     memberService.join(member2);
        //     fail("예외 발생");
        // } catch (IllegalStateException e) {
        //     // TODO: handle exception
        // }
        IllegalStateException e = assertThrows(IllegalStateException.class, () -> memberService.join(member2));
        assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");


        //then

    }

    @Test
    void findOne() {

    }

}
