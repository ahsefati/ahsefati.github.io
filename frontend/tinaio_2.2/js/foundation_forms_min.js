! function(a, b, c, d) { "use strict";
    Foundation.libs.forms = { name: "forms", version: "4.2.3", cache: {}, settings: { disable_class: "no-custom", last_combo: null }, init: function(b, c, d) { return "object" == typeof c && a.extend(!0, this.settings, c), "string" != typeof c ? (this.settings.init || this.events(), this.assemble(), this.settings.init) : this[c].call(this, d) }, assemble: function() { a('form.custom input[type="radio"]', a(this.scope)).not('[data-customforms="disabled"]').not("." + this.settings.disable_class).each(this.append_custom_markup), a('form.custom input[type="checkbox"]', a(this.scope)).not('[data-customforms="disabled"]').not("." + this.settings.disable_class).each(this.append_custom_markup), a("form.custom select", a(this.scope)).not('[data-customforms="disabled"]').not("." + this.settings.disable_class).not("[multiple=multiple]").each(this.append_custom_select) }, events: function() { var d = this;
            a(this.scope).on("click.fndtn.forms", "form.custom span.custom.checkbox", function(b) { b.preventDefault(), b.stopPropagation(), d.toggle_checkbox(a(this)) }).on("click.fndtn.forms", "form.custom span.custom.radio", function(b) { b.preventDefault(), b.stopPropagation(), d.toggle_radio(a(this)) }).on("change.fndtn.forms", "form.custom select", function(b, c) { a(this).is('[data-customforms="disabled"]') || d.refresh_custom_select(a(this), c) }).on("click.fndtn.forms", "form.custom label", function(b) { if (a(b.target).is("label")) { var e, f, c = a("#" + d.escape(a(this).attr("for"))).not('[data-customforms="disabled"]');
                    0 !== c.length && ("checkbox" === c.attr("type") ? (b.preventDefault(), e = a(this).find("span.custom.checkbox"), 0 === e.length && (e = c.add(this).siblings("span.custom.checkbox").first()), d.toggle_checkbox(e)) : "radio" === c.attr("type") && (b.preventDefault(), f = a(this).find("span.custom.radio"), 0 === f.length && (f = c.add(this).siblings("span.custom.radio").first()), d.toggle_radio(f))) } }).on("mousedown.fndtn.forms", "form.custom div.custom.dropdown", function() { return !1 }).on("click.fndtn.forms", "form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector", function(b) { var c = a(this),
                    f = c.closest("div.custom.dropdown"),
                    g = e(f, "select"); return f.hasClass("open") || a(d.scope).trigger("click"), b.preventDefault(), !1 === g.is(":disabled") ? (f.toggleClass("open"), f.hasClass("open") ? a(d.scope).on("click.fndtn.forms.customdropdown", function() { f.removeClass("open"), a(d.scope).off(".fndtn.forms.customdropdown") }) : a(d.scope).on(".fndtn.forms.customdropdown"), !1) : void 0 }).on("click.fndtn.forms touchend.fndtn.forms", "form.custom div.custom.dropdown li", function(b) { var c = a(this),
                    d = c.closest("div.custom.dropdown"),
                    f = e(d, "select"),
                    g = 0; if (b.preventDefault(), b.stopPropagation(), !a(this).hasClass("disabled")) { a("div.dropdown").not(d).removeClass("open"); var h = c.closest("ul").find("li.selected");
                    h.removeClass("selected"), c.addClass("selected"), d.removeClass("open").find("a.current").text(c.text()), c.closest("ul").find("li").each(function(a) { c[0] === this && (g = a) }), f[0].selectedIndex = g, f.data("prevalue", h.html()), f.trigger("change") } }), a(b).on("keydown", function(b) { var e = (c.activeElement, Foundation.libs.forms),
                    f = a(".custom.dropdown.open"); if (f.length > 0) { if (b.preventDefault(), 13 === b.which && f.find("li.selected").trigger("click"), 27 === b.which && f.removeClass("open"), b.which >= 65 && b.which <= 90) { var g = e.go_to(f, b.which),
                            h = f.find("li.selected");
                        g && (h.removeClass("selected"), e.scrollTo(g.addClass("selected"), 300)) } if (38 === b.which) { var h = f.find("li.selected"),
                            i = h.prev(":not(.disabled)");
                        i.length > 0 && (i.parent()[0].scrollTop = i.parent().scrollTop() - e.outerHeight(i), h.removeClass("selected"), i.addClass("selected")) } else if (40 === b.which) { var h = f.find("li.selected"),
                            g = h.next(":not(.disabled)");
                        g.length > 0 && (g.parent()[0].scrollTop = g.parent().scrollTop() + e.outerHeight(g), h.removeClass("selected"), g.addClass("selected")) } } }), this.settings.init = !0 }, go_to: function(a, b) { var c = a.find("li"),
                d = c.length; if (d > 0)
                for (var e = 0; d > e; e++) { var f = c.eq(e).text().charAt(0).toLowerCase(); if (f === String.fromCharCode(b).toLowerCase()) return c.eq(e) } }, scrollTo: function(a, b) { if (!(0 > b)) { var c = a.parent(),
                    d = this.outerHeight(a),
                    e = d * a.index() - c.scrollTop(),
                    f = 10 * (e / b);
                this.scrollToTimerCache = setTimeout(function() { isNaN(parseInt(f, 10)) || (c[0].scrollTop = c.scrollTop() + f, this.scrollTo(a, b - 10)) }.bind(this), 10) } }, append_custom_markup: function(b, c) { var d = a(c),
                e = d.attr("type"),
                f = d.next("span.custom." + e);
            d.parent().hasClass("switch") || d.addClass("hidden-field"), 0 === f.length && (f = a('<span class="custom ' + e + '"></span>').insertAfter(d)), f.toggleClass("checked", d.is(":checked")), f.toggleClass("disabled", d.is(":disabled")) }, append_custom_select: function(b, c) { var o, d = Foundation.libs.forms,
                e = a(c),
                f = e.next("div.custom.dropdown"),
                g = f.find("ul"),
                i = (f.find(".current"), f.find(".selector")),
                j = e.find("option"),
                k = j.filter(":selected"),
                l = e.attr("class") ? e.attr("class").split(" ") : [],
                m = 0,
                n = "",
                p = !1; if (0 === f.length) { var q = e.hasClass("small") ? "small" : e.hasClass("medium") ? "medium" : e.hasClass("large") ? "large" : e.hasClass("expand") ? "expand" : "";
                f = a('<div class="' + ["custom", "dropdown", q].concat(l).filter(function(a, b, c) { return "" === a ? !1 : c.indexOf(a) === b }).join(" ") + '"><a href="#" class="selector"></a><ul /></div>'), i = f.find(".selector"), g = f.find("ul"), n = j.map(function() { var b = a(this).attr("class") ? a(this).attr("class") : ""; return "<li class='" + b + "'>" + a(this).html() + "</li>" }).get().join(""), g.append(n), p = f.prepend('<a href="#" class="current">' + k.html() + "</a>").find(".current"), e.after(f).addClass("hidden-field") } else n = j.map(function() { return "<li>" + a(this).html() + "</li>" }).get().join(""), g.html("").append(n); if (d.assign_id(e, f), f.toggleClass("disabled", e.is(":disabled")), o = g.find("li"), d.cache[f.data("id")] = o.length, j.each(function(b) { this.selected && (o.eq(b).addClass("selected"), p && p.html(a(this).html())), a(this).is(":disabled") && o.eq(b).addClass("disabled") }), !f.is(".small, .medium, .large, .expand")) { f.addClass("open"); var d = Foundation.libs.forms;
                d.hidden_fix.adjust(g), m = d.outerWidth(o) > m ? d.outerWidth(o) : m, Foundation.libs.forms.hidden_fix.reset(), f.removeClass("open") } }, assign_id: function(a, b) { var c = [+new Date, Foundation.random_str(5)].join("-");
            a.attr("data-id", c), b.attr("data-id", c) }, refresh_custom_select: function(b, c) { var d = this,
                e = 0,
                f = b.next(),
                g = b.find("option"),
                h = f.find("li");
            (h.length !== this.cache[f.data("id")] || c) && (f.find("ul").html(""), g.each(function() { var b = a("<li>" + a(this).html() + "</li>");
                f.find("ul").append(b) }), g.each(function(b) { this.selected && (f.find("li").eq(b).addClass("selected"), f.find(".current").html(a(this).html())), a(this).is(":disabled") && f.find("li").eq(b).addClass("disabled") }), f.removeAttr("style").find("ul").removeAttr("style"), f.find("li").each(function() { f.addClass("open"), d.outerWidth(a(this)) > e && (e = d.outerWidth(a(this))), f.removeClass("open") }), h = f.find("li"), this.cache[f.data("id")] = h.length) }, toggle_checkbox: function(a) { var b = a.prev(),
                c = b[0];!1 === b.is(":disabled") && (c.checked = c.checked ? !1 : !0, a.toggleClass("checked"), b.trigger("change")) }, toggle_radio: function(a) { var b = a.prev(),
                c = b.closest("form.custom"),
                d = b[0];!1 === b.is(":disabled") && (c.find('input[type="radio"][name="' + this.escape(b.attr("name")) + '"]').next().not(a).removeClass("checked"), a.hasClass("checked") || a.toggleClass("checked"), d.checked = a.hasClass("checked"), b.trigger("change")) }, escape: function(a) { return a ? a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : "" }, hidden_fix: { tmp: [], hidden: null, adjust: function(b) { var c = this;
                c.hidden = b.parents(), c.hidden = c.hidden.add(b).filter(":hidden"), c.hidden.each(function() { var b = a(this);
                    c.tmp.push(b.attr("style")), b.css({ visibility: "hidden", display: "block" }) }) }, reset: function() { var b = this;
                b.hidden.each(function(c) { var e = a(this),
                        f = b.tmp[c];
                    f === d ? e.removeAttr("style") : e.attr("style", f) }), b.tmp = [], b.hidden = null } }, off: function() { a(this.scope).off(".fndtn.forms") }, reflow: function() {} }; var e = function(b, c) { for (var b = b.prev(); b.length;) { if (b.is(c)) return b;
            b = b.prev() } return a() } }(Foundation.zj, this, this.document);