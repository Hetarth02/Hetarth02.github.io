<script>
    function handleSubmit(e) {
        let formData = new FormData(e.target);
        let form_data = {};
        formData.forEach((value, key) => {
            form_data[key] = value;
        });
        form_data = JSON.stringify(form_data);
        const url = "https://hetarth-portfolio-backend.herokuapp.com/send-mail";
        fetch(url, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: form_data,
        })
            .then((response) => {
                let data = response.json();
                data.then((data) => {
                    alert(data.message);
                    e.target.reset();
                });
            })
            .catch((error) => {
                let data = error.json();
                data.then((data) => {
                    alert(data.message);
                });
            });
    }
</script>

<div class="sm:w-2/4 mx-auto">
    <form
        id="contact-form"
        class="grid grid-cols-2 grid-rows-4 gap-x-4"
        on:submit|preventDefault={handleSubmit}
    >
        <div class="form-control col-span-2 sm:col-span-1">
            <label for="first_name" class="label">
                <span class="label-text text-lg">First name</span>
            </label>
            <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="John"
                class="input input-bordered inline-flex items-stretch placeholder:opacity-80"
                required
            />
        </div>
        <div class="form-control col-span-2 sm:col-span-1">
            <label for="last_name" class="label">
                <span class="label-text text-lg">Last name</span>
            </label>
            <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Doe"
                class="input input-bordered inline-flex items-stretch placeholder:opacity-80"
            />
        </div>
        <div class="form-control col-span-2">
            <label for="email" class="label">
                <span class="label-text text-lg">Email</span>
            </label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="john@gmail.com"
                class="input input-bordered inline-flex items-stretch placeholder:opacity-80"
                required
            />
        </div>
        <div class="form-control col-span-2">
            <label for="message" class="label">
                <span class="label-text text-lg">Your Message</span>
            </label>
            <textarea
                id="message"
                name="message"
                class="textarea textarea-bordered h-24 placeholder:opacity-80"
                placeholder="Hey, can you make a website for me?"
                required
            />
        </div>
        <div class="col-span-2 inline-flex items-center justify-center">
            <button
                type="submit"
                class="btn btn-outline btn-success m-4 gap-2 hover:scale-[1.10]"
            >
                <i class="bi bi-send text-lg" /> Send
            </button>
        </div>
    </form>
</div>
