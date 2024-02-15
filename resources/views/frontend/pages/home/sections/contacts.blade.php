<div id="contacts" class="rn-contact-area rn-section-gap section-separator">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true"
                    class="section-title text-center">
                    <span class="subtitle">Contact</span>
                    <h2 class="title">Contact With Me</h2>
                </div>
            </div>
        </div>
        <div class="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" data-aos-once="true" class="col-lg-5">
                <div class="contact-about-area">
                    <div class="thumbnail">
                        <img src="{{ asset('frontend') }}/images/contact/contact1.png" alt="contact-img">
                    </div>
                    <div class="title-area">
                        <h4 class="title">Khairul Islam Emon</h4>
                        <span>Laravel Developer</span>
                    </div>
                    <div class="description">
                        <p>For any queries, please contact me on my phone or through email.</p>
                    </div>
                    <div class="social-area">
                        <div class="name">CONTACT ME</div>
                        <div class="social-icone">
                            <a href="tel:+8801638849305"><i data-feather="phone"></i></a>
                            <a href="mailto:mdkhairulislamemon1432@gmail.com"><i data-feather="mail"></i></a>
                            <a target="blank" href="https://github.com/emon1432"><i data-feather="github"></i></a>
                            <a target="blank" href="https://www.linkedin.com/in/md-khairul-islam-emon-6849071a5/"><i
                                    data-feather="linkedin"></i></a>

                            <a href="https://www.facebook.com/e.mon14321"><i data-feather="facebook"></i></a>

                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="600" data-aos-once="true"
                class="col-lg-7 contact-input">
                <div class="contact-form-wrapper">
                    <div class="introduce">
                        <form class="rnt-contact-form rwt-dynamic-form row" id="contact-form" method="POST"
                            action="mail.php">

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="contact-name">Your Name</label>
                                    <input class="form-control form-control-lg" name="contact-name" id="contact-name"
                                        type="text">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="contact-phone">Phone Number</label>
                                    <input class="form-control" name="contact-phone" id="contact-phone" type="text">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="contact-email">Email</label>
                                    <input class="form-control form-control-sm" id="contact-email" name="contact-email"
                                        type="email">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="subject">subject</label>
                                    <input class="form-control form-control-sm" id="subject" name="subject"
                                        type="text">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="contact-message">Your Message</label>
                                    <textarea name="contact-message" id="contact-message" cols="30" rows="10"></textarea>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <button name="submit" type="submit" id="submit"
                                    href="mailto:mdkhairulislamemon1432@gmail.com" class="rn-btn rn-button btn-primary">
                                    <span>SEND MESSAGE</span>
                                    <i data-feather="arrow-right"></i>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
